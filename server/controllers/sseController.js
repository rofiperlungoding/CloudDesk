// Store active SSE clients
let clients = [];

// Store current simulation state
let metricsCache = {};

/**
 * Handle new SSE connection
 */
const streamInstanceMetrics = (req, res) => {
    // SSE Headers
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'X-Accel-Buffering': 'no' // Nginx specific
    };

    res.writeHead(200, headers);

    // Create client object
    const clientId = Date.now();
    const newClient = {
        id: clientId,
        res
    };

    clients.push(newClient);

    // Send initial connection event
    const initData = `data: ${JSON.stringify({ type: 'CONNECTED', clientId })}\n\n`;
    res.write(initData);

    // Send current cached metrics immediately if available
    if (Object.keys(metricsCache).length > 0) {
        res.write(`data: ${JSON.stringify({ type: 'METRICS_UPDATE', data: metricsCache })}\n\n`);
    }

    // Remove client on close
    req.on('close', () => {
        console.log(`${clientId} Connection closed`);
        clients = clients.filter(client => client.id !== clientId);
    });
};

/**
 * Send updates to all connected clients
 */
const broadcastMetrics = (metrics) => {
    clients.forEach(client => {
        client.res.write(`data: ${JSON.stringify({ type: 'METRICS_UPDATE', data: metrics })}\n\n`);
    });
};

/**
 * Simulation Helper: Generate random metrics
 */
const generateRandomMetrics = (instanceId) => {
    // Simulate realistic fluctuation
    // If we had previous values, we could smoothen the curve, but random is fine for demo
    return {
        instanceId,
        cpuUsage: Math.floor(Math.random() * 40) + 5, // 5% - 45% idle/light load
        ramUsage: Math.floor(Math.random() * 30) + 20, // 20% - 50%
        diskRead: Math.random() > 0.7 ? Math.floor(Math.random() * 50) : 0, // Occasional spikes
        diskWrite: Math.random() > 0.8 ? Math.floor(Math.random() * 20) : 0,
        networkUp: Math.floor(Math.random() * 100), // Kbps
        networkDown: Math.floor(Math.random() * 500), // Kbps
        timestamp: new Date().toISOString()
    };
};

/**
 * Start the simulation loop
 * In production, this would be replaced by a real monitoring agent aggregator
 */
const startMetricsSimulation = (db) => {
    console.log('🔄 Starting Metrics Simulation...');

    setInterval(async () => {
        // query DB for running instances (mocking this part for now with hardcoded list or DB query)
        // For now, let's assume we have a list of instance IDs from the DB or memory
        try {
            // In a real app, we'd query: const runningInstances = await db.query("SELECT id FROM instances WHERE status = 'RUNNING'");
            // For this demo, we'll just generate metrics for a fixed set of IDs that match our seed data
            // 'inst-001', 'inst-002', 'inst-003', 'inst-007', 'inst-008', 'inst-009', 'inst-011' are running in seed
            const runningInstanceIds = [
                'inst-001', 'inst-002', 'inst-003', 'inst-007', 'inst-008', 'inst-009', 'inst-011'
            ];

            const newMetrics = {};
            runningInstanceIds.forEach(id => {
                newMetrics[id] = generateRandomMetrics(id);
            });

            // Update cache
            metricsCache = newMetrics;

            // Broadcast
            broadcastMetrics(newMetrics);

        } catch (error) {
            console.error('Simulation error:', error);
        }
    }, 2000); // Update every 2 seconds
};

module.exports = {
    streamInstanceMetrics,
    startMetricsSimulation
};
