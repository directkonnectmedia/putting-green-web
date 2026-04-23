// ============================================================================
// GOOGLE FORMS INTEGRATION — booking wizard submission target.
// When a visitor completes the multi-step wizard, its submit handler POSTs
// the answers to this Google Form. Responses land in the Form's linked Sheet
// and trigger whatever email notifications are configured on that Form.
// ============================================================================
//
// FIRST-TIME SETUP (per client):
//
//   1. Create a Google Form in the client's Google account with these fields
//      (all short-answer except the last which is paragraph):
//         - First Name   (required)
//         - Last Name    (required)
//         - Phone        (required)
//         - Email        (required)
//         - Services     (required)
//         - Project Details (paragraph, optional)
//
//   2. In the Form:  Responses tab -> click the green Sheets icon ->
//      create a linked spreadsheet. Then Responses -> 3-dot menu ->
//      "Get email notifications for new responses".
//
//   3. Get the submission URL and entry IDs:
//        a. Open the public form link (Send -> link icon).
//        b. View page source (Ctrl+U) and search for `formResponse`
//           — that's the submissionUrl below.
//        c. In the same source, search for `FB_PUBLIC_LOAD_DATA_`.
//           Each field appears as `[widgetId,"label",null,type,[[ENTRY_ID,...]]]`.
//           Map each ENTRY_ID to its matching label and paste below.
//
//      Alternate method: on the form, 3-dot menu -> "Get pre-filled link",
//      type FIRSTNAME / LASTNAME / etc. into each field, copy the URL,
//      and read the entry.XXXXX=VALUE params.
//
//   4. Replace every placeholder below with the real URL and IDs.
//      No other file needs changing — the wizard reads from here.
//
// ============================================================================

export const GOOGLE_FORM = {
  // Paste the client's form submission endpoint here.
  // Must end in `/formResponse` — not `/viewform`.
  submissionUrl: 'https://docs.google.com/forms/d/e/REPLACE_WITH_FORM_ID/formResponse',

  fields: {
    firstName: 'entry.000000000',
    lastName:  'entry.000000000',
    phone:     'entry.000000000',
    email:     'entry.000000000',
    services:  'entry.000000000',
    details:   'entry.000000000',
  },
}
