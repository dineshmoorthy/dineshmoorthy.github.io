# Dinesh Dakshinamoorthy - Resume Website

A clean, single-page resume website displaying Dinesh Dakshinamoorthy's professional experience and skills.

## Features

- **Single Page Design**: All resume content displayed on one page
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Styling**: Clean, modern design with proper typography
- **Fast Loading**: Static HTML with minimal dependencies

## Structure

The website includes:
- **Header**: Name, title, and contact information
- **Skills**: Comprehensive list of technical skills organized by category
- **Summary**: Professional overview
- **Education**: Academic background
- **Languages**: Language proficiency
- **Certification**: Professional certifications
- **Experience**: Work history with detailed descriptions
- **Key Achievements**: Notable accomplishments

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Deployment

To deploy to GitHub Pages:

```bash
npm run deploy
```

## Technologies Used

- HTML5
- CSS3 (with custom styling)
- Font Awesome Icons
- Google Fonts (Inter)
- Responsive design principles

## File Structure

```
client/
├── index.html          # Main resume page
└── public/            # Static assets
    └── images/        # Profile and institution images
```

## Customization

The resume content is directly embedded in the HTML file. To update:

1. Edit `client/index.html`
2. Modify the content within the appropriate sections
3. Update styling in the `<style>` section if needed

## License

MIT License