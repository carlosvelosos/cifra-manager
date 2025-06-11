# Google Custom Search Engine Setup Guide

This guide will help you set up the Google Custom Search Engine (CSE) widget for enhanced search functionality.

## Step 1: Create a Custom Search Engine

1. Go to [Google Custom Search Engine](https://cse.google.com/)
2. Click "Add" to create a new search engine
3. Configure your search engine:
   - **Name**: "CifraClub Search" (or any name you prefer)
   - **What to search**: Choose "Sites to search"
   - **Sites to search**: Add `cifraclub.com.br`
   - **Language**: Portuguese (Brazil)
   - **SafeSearch**: On (recommended)

## Step 2: Get Your Search Engine ID

1. After creating the search engine, you'll see a summary page
2. Copy the **Search engine ID** (also called CX parameter)
3. It will look something like: `012345678901234567890:abcdefghijk`

## Step 3: Configure Your Application

### Method 1: Environment Variable (Recommended)

1. Create a `.env.local` file in your project root
2. Add your CX ID:
   ```bash
   NEXT_PUBLIC_GOOGLE_CX=your_cx_id_here
   ```

### Method 2: Direct Code Modification

1. Open `app/test/page.tsx`
2. Find this line:
   ```javascript
   script.src = "https://cse.google.com/cse.js?cx=GOOGLE_CX";
   ```
3. Replace `GOOGLE_CX` with your actual CX ID:
   ```javascript
   script.src =
     "https://cse.google.com/cse.js?cx=012345678901234567890:abcdefghijk";
   ```

## Step 4: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to `/test` page
3. Click "Busca Avançada" button
4. You should see the Google Custom Search widget load
5. Try searching for an artist to test functionality

## Customization Options

### Search Engine Settings

In your CSE control panel, you can customize:

- **Look and feel**: Colors, fonts, layout
- **Search features**: Auto-complete, suggestions
- **Advanced settings**: Language preferences, safe search
- **Monetization**: AdSense integration (optional)

### Widget Styling

The application includes custom CSS to match the design. You can modify the styling in the `useEffect` hook in `app/test/page.tsx`.

## Troubleshooting

### Widget Not Loading

- Check if your CX ID is correct
- Verify your domain is allowed in CSE settings
- Check browser console for errors

### No Results Showing

- Ensure `cifraclub.com.br` is properly indexed by Google
- Try broader search terms
- Check if safe search is blocking results

### Styling Issues

- Custom CSS might conflict with Google's default styles
- Check browser developer tools for CSS conflicts
- Modify the injected styles in the component

## Additional Resources

- [Google Custom Search Engine Documentation](https://developers.google.com/custom-search)
- [CSE Control Panel](https://cse.google.com/cse/all)
- [Programmable Search Element Guide](https://developers.google.com/custom-search/docs/element)

## Support

If you encounter issues:

1. Check the browser console for errors
2. Verify your CX ID is correctly configured
3. Test with a simple search term first
4. Ensure your CSE includes `cifraclub.com.br` in the sites to search
