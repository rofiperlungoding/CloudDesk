# API Reference & FAQ Pages - Update Documentation

## Overview
Halaman API Reference dan FAQ telah diperluas dengan konten yang lebih lengkap dan komprehensif untuk memberikan informasi yang lebih baik kepada pengguna.

## API Reference Page (`/docs/api`)

### Konten yang Ditambahkan:

#### 1. Rate Limits Section
- Informasi rate limit untuk setiap tier plan (Starter, Professional, Enterprise)
- Penjelasan tentang rate limit headers
- Visual badges untuk setiap tier

#### 2. Expanded Endpoints

**Instances API:**
- GET /v1/instances - List all instances
- POST /v1/instances - Create instance
- GET /v1/instances/:id - Get instance details
- POST /v1/instances/:id/start - Start instance
- POST /v1/instances/:id/stop - Stop instance
- DELETE /v1/instances/:id - Delete instance

**Presets API:**
- GET /v1/presets - List all presets
- GET /v1/presets/:id - Get preset details

**Snapshots API:**
- GET /v1/snapshots - List snapshots
- POST /v1/instances/:id/snapshots - Create snapshot
- POST /v1/snapshots/:id/restore - Restore from snapshot
- DELETE /v1/snapshots/:id - Delete snapshot

**Usage & Billing API:**
- GET /v1/usage - Get usage statistics
- GET /v1/invoices/:id - Get invoice details

#### 3. Enhanced Error Handling
- Expanded HTTP status codes (200, 201, 400, 401, 403, 404, 429, 500)
- Error response format example
- Detailed error descriptions

#### 4. Code Examples
- cURL examples for each endpoint
- Request/response format examples
- Parameter documentation

## FAQ Page (`/docs/faq`)

### Kategori yang Ditambahkan:

#### 1. Performance & Reliability (4 pertanyaan)
- Uptime guarantee
- Connection speed
- Resource upgrades
- Maintenance windows

#### 2. Classroom Mode (4 pertanyaan)
- What is Classroom Mode
- Student limits
- Access control
- Assignment distribution

#### 3. Integration & API (4 pertanyaan)
- LMS integrations
- SSO support
- API automation
- External connections

#### 4. Enhanced Support Section
- Support hours breakdown
- Multiple contact methods
- Additional action buttons

### Total FAQ Items:
- Getting Started: 4 questions
- Billing & Pricing: 4 questions
- Technical: 5 questions
- Security & Privacy: 3 questions
- Performance: 4 questions
- Classroom Mode: 4 questions
- Integration: 4 questions

**Total: 28 FAQ items**

## New Component: Accordion

### File: `src/components/ui/Accordion.tsx`

Komponen accordion interaktif untuk FAQ yang lebih user-friendly:

**Features:**
- Collapsible sections
- Smooth animations
- Keyboard accessible
- Focus-visible states
- ChevronDown icon rotation

**Usage:**
```tsx
<Accordion>
  <AccordionItem title="Question?" defaultOpen>
    <p>Answer content...</p>
  </AccordionItem>
</Accordion>
```

## Alternative FAQ Page: FAQAccordion

### File: `src/routes/FAQAccordion.tsx`
### Route: `/docs/faq-accordion`

Versi alternatif dari FAQ page menggunakan accordion component untuk pengalaman yang lebih interaktif:

**Benefits:**
- Lebih compact - semua pertanyaan terlihat sekaligus
- User dapat expand/collapse sesuai kebutuhan
- Lebih mudah untuk scan pertanyaan
- Smooth transitions

**Same Content:**
- Semua 28 FAQ items dari versi card
- Sama persis dengan FAQ.tsx tapi dengan UI accordion

## Navigation Updates

### Updated Sidebar Navigation (API Reference)
- Authentication
- Instances
- Presets
- Snapshots
- Usage & Billing
- Rate Limits

## Design Consistency

### Colors & Badges:
- `neutral` - Default/Performance
- `info` - POST methods, Getting Started, Classroom
- `success` - GET methods, Billing, Integration
- `warning` - Technical
- `danger`/`error` - DELETE methods, Security
- `running`, `stopped`, `provisioning` - Status badges

### Typography:
- Page titles: `text-4xl font-semibold`
- Section titles: `text-2xl font-semibold`
- Card titles: `text-lg font-semibold`
- Body text: `text-gray-600`

### Spacing:
- Section spacing: `mb-12`
- Card spacing: `space-y-4`
- Content padding: `p-6` or `p-8`

## Testing Checklist

- [x] No TypeScript errors
- [x] All routes accessible
- [x] Navigation links work
- [x] Code examples formatted correctly
- [x] Badges use correct variants
- [x] Accordion component functional
- [x] Responsive design maintained
- [x] Focus states working

## Future Enhancements

1. **Search Functionality**
   - Implement actual search in FAQ
   - Filter questions by keyword
   - Highlight search results

2. **API Playground**
   - Interactive API testing
   - Try endpoints directly from docs
   - Response visualization

3. **Code Language Switcher**
   - Show examples in multiple languages
   - JavaScript, Python, Ruby, etc.

4. **FAQ Analytics**
   - Track most viewed questions
   - Suggest related questions
   - "Was this helpful?" feedback

5. **Video Tutorials**
   - Embed video guides
   - Step-by-step walkthroughs
   - Screen recordings

## Files Modified

1. `src/routes/APIReference.tsx` - Expanded content
2. `src/routes/FAQ.tsx` - Added more categories
3. `src/components/ui/Accordion.tsx` - New component
4. `src/routes/FAQAccordion.tsx` - New alternative page
5. `src/App.tsx` - Added new route

## Summary

Halaman API Reference dan FAQ sekarang memiliki konten yang jauh lebih lengkap dan informatif. Pengguna dapat menemukan jawaban untuk hampir semua pertanyaan umum, dan developer memiliki dokumentasi API yang komprehensif untuk integrasi.
