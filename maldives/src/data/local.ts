// Maldives facts shared by every page outline (src/data/outlines.ts) and the
// buyer FAQs (src/data/faq.ts). Keep local claims here so they are edited once.
//
// VERIFY before relying on them in sales: every item marked "VERIFY" below is a
// product capability stated on the site that the team must confirm is live.

/** Local islands with many guest houses — used in "who it's for" copy. */
export const GUEST_HOUSE_ISLANDS = ['Maafushi', 'Thulusdhoo', 'Dhigurah', 'Fulidhoo', 'Ukulhas', 'Hulhumalé']

export const LOCAL = {
  /** Time zone named in every call to action. */
  hours: 'Maldives time (MVT, UTC+5)',
  hoursLine:
    'We work Maldives hours (MVT, UTC+5) from our Sri Lanka base, just 30 minutes ahead, so demos, training, support and go-lives all happen in your working day.',
  channels: 'WhatsApp, phone or email',
}

/** Maldives-specific capabilities per product page ("Built for the Maldives" section). */
export const LOCAL_FIT: Record<string, { title: string; desc: string }[]> = {
  '/hotelcloud': [
    // VERIFY: USD + MVR rates and invoices.
    { title: 'USD and MVR', desc: 'Room rates, invoices and receipts in US dollars for tourists and rufiyaa for local guests and suppliers.' },
    // VERIFY: tax lines per property.
    { title: 'T-GST, service charge and Green Tax', desc: 'Tax lines are set up per property, so every invoice shows them separately and finance reports add them up for you.' },
    { title: 'Transfers with the booking', desc: 'Arrival and departure transfers are planned with the room, and guest houses can book speedboat seats through Viduvaru.' },
    { title: 'Made for island internet', desc: 'A lightweight web app that runs in a phone browser over mobile data, so staff on the island and owners in Malé see the same bookings.' },
  ],
  '/viduvaru': [
    { title: 'Your routes and islands', desc: 'Set up routes between Malé, Velana International Airport, Hulhumalé and the islands you serve, with schedules and seat limits per boat.' },
    // VERIFY: separate tourist and local fares.
    { title: 'Tourist and local fares', desc: 'Fares in US dollars for tourists and rufiyaa for local passengers, on the same trip.' },
    { title: 'Guest house partner portal', desc: 'Guest houses book transfers for their guests themselves, so your team stops taking bookings over the phone.' },
    // VERIFY: passenger manifests per trip.
    { title: 'Passenger lists per trip', desc: 'Every departure has a passenger list your crew can check at the jetty, with walk-ins and phone bookings added by staff.' },
  ],
  '/travel-crm': [
    { title: 'Resort and guest house packages', desc: 'Build packages around resorts, guest houses and liveaboards, with your own markup and seasonal prices.' },
    // VERIFY: transfer types in quotations.
    { title: 'Transfers in every quote', desc: 'Add speedboat, seaplane or domestic flight transfers to a quotation so the client sees the full price of getting to the island.' },
    { title: 'Enquiries from WhatsApp and email', desc: 'Every enquiry is logged against one client profile, so the whole team sees the history without searching inboxes.' },
    { title: 'Quotes, invoices and receipts in USD', desc: 'Pricing stays consistent from the first proposal to the final receipt, without re-typing figures.' },
  ],
  '/real-estate-control': [
    { title: 'Villas, guest houses and rooms', desc: 'Every property your agency sells or manages — resort allocations, guest houses, villas and rental units — in one dashboard.' },
    { title: 'Teams in Malé and on the islands', desc: 'Reservations, finance and operations staff each get their own login and permissions, wherever they work.' },
    { title: 'USD revenue tracking', desc: 'Bookings, payments and revenue per property, so you see which islands and properties earn the most.' },
    { title: 'Onboarding and training', desc: 'We set up your properties and train your team, then support new staff as the business grows.' },
  ],
}
