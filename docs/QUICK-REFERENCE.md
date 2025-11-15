# Quick Reference - API & FAQ Pages

## 🚀 Quick Links

### Documentation Pages
- **API Reference:** `/docs/api` - Complete REST API documentation
- **FAQ (Cards):** `/docs/faq` - Traditional card-based FAQ
- **FAQ (Accordion):** `/docs/faq-accordion` - Interactive collapsible FAQ
- **Getting Started:** `/docs/getting-started` - Quick start guide
- **Documentation Hub:** `/docs` - Main documentation page

## 📚 API Reference Sections

### Authentication
- How to use API keys
- Authorization header format
- Getting your API key

### Instances API
```bash
GET    /v1/instances          # List all instances
POST   /v1/instances          # Create instance
GET    /v1/instances/:id      # Get instance details
POST   /v1/instances/:id/start   # Start instance
POST   /v1/instances/:id/stop    # Stop instance
DELETE /v1/instances/:id      # Delete instance
```

### Presets API
```bash
GET /v1/presets      # List all presets
GET /v1/presets/:id  # Get preset details
```

### Snapshots API
```bash
GET    /v1/snapshots                    # List snapshots
POST   /v1/instances/:id/snapshots      # Create snapshot
POST   /v1/snapshots/:id/restore        # Restore snapshot
DELETE /v1/snapshots/:id                # Delete snapshot
```

### Usage & Billing API
```bash
GET /v1/usage          # Get usage statistics
GET /v1/invoices/:id   # Get invoice details
```

### Rate Limits
- **Starter:** 500 requests/hour
- **Professional:** 2,000 requests/hour
- **Enterprise:** 10,000 requests/hour

### HTTP Status Codes
- `200` OK - Success
- `201` Created - Resource created
- `400` Bad Request - Invalid parameters
- `401` Unauthorized - Invalid API key
- `403` Forbidden - Insufficient permissions
- `404` Not Found - Resource doesn't exist
- `429` Too Many Requests - Rate limit exceeded
- `500` Internal Server Error - Server error

## ❓ FAQ Categories

### 1. Getting Started (4 items)
- Creating first desktop
- Software installation requirements
- Free trial details
- Provisioning time

### 2. Billing & Pricing (5 items)
- How billing works
- Changing plans
- Payment methods
- Educational discounts
- Budget limits

### 3. Technical (6 items)
- Available operating systems
- Software installation
- File transfers
- Data retention
- GPU support
- Network ports

### 4. Security & Privacy (5 items)
- Data security
- Access control
- Automatic backups
- Data privacy compliance
- Two-factor authentication

### 5. Performance & Reliability (4 items)
- Uptime guarantee
- Connection speed
- Resource upgrades
- Maintenance windows

### 6. Classroom Mode (4 items)
- What is Classroom Mode
- Student capacity
- Access control
- Assignment distribution

### 7. Integration & API (4 items)
- LMS integrations
- SSO support
- API automation
- External connections

## 🎨 Component Usage

### Accordion Component
```tsx
import { Accordion, AccordionItem } from '../components/ui/Accordion';

<Accordion>
  <AccordionItem title="Question?" defaultOpen>
    <p>Answer content...</p>
  </AccordionItem>
  <AccordionItem title="Another question?">
    <p>More content...</p>
  </AccordionItem>
</Accordion>
```

### Badge Variants
```tsx
<Badge variant="neutral">Default</Badge>
<Badge variant="info">Information</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="running">Running</Badge>
<Badge variant="stopped">Stopped</Badge>
<Badge variant="provisioning">Provisioning</Badge>
<Badge variant="error">Error</Badge>
```

## 📞 Support Information

### Contact Methods
- **Email:** 24/7 (response within 24 hours)
- **Live Chat:** Monday-Friday, 9 AM - 6 PM EST
- **Phone:** Enterprise customers only
- **Community Forum:** 24/7 peer support

### Support Resources
1. Browse documentation at `/docs`
2. Check FAQ at `/docs/faq`
3. View API docs at `/docs/api`
4. Contact support team
5. Join community forum

## 🔧 Development

### Files Structure
```
src/
├── routes/
│   ├── APIReference.tsx      # API documentation page
│   ├── FAQ.tsx               # Card-based FAQ
│   └── FAQAccordion.tsx      # Accordion-based FAQ
├── components/
│   └── ui/
│       └── Accordion.tsx     # Accordion component
└── App.tsx                   # Route configuration
```

### Adding New FAQ Item
1. Open `src/routes/FAQ.tsx` or `FAQAccordion.tsx`
2. Find the appropriate category section
3. Add new `<Card>` or `<AccordionItem>`
4. Include title and content
5. Test and verify

### Adding New API Endpoint
1. Open `src/routes/APIReference.tsx`
2. Find or create appropriate section
3. Add endpoint with method badge
4. Include code example
5. Document parameters
6. Update sidebar navigation

## 🎯 Best Practices

### API Documentation
- Always include code examples
- Document all parameters
- Show request/response format
- Include error handling
- Provide authentication details

### FAQ Content
- Keep answers concise
- Link to detailed docs when needed
- Use clear, simple language
- Group related questions
- Update regularly based on user feedback

### Accessibility
- Use semantic HTML
- Include focus states
- Ensure keyboard navigation
- Provide alt text for images
- Test with screen readers

---

**Last Updated:** November 15, 2025
