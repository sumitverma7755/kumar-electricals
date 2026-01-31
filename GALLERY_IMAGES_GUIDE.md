# Gallery Images Setup Guide

## Directory Structure
Create the following directory in your public folder:
```
public/
  gallery/
    house-before-1.jpg
    house-after-1.jpg
    commercial-before-1.jpg
    commercial-after-1.jpg
    fan-before-1.jpg
    fan-after-1.jpg
    panel-before-1.jpg
    panel-after-1.jpg
    lighting-before-1.jpg
    lighting-after-1.jpg
    motor-before-1.jpg
    motor-after-1.jpg
```

## Image Requirements
- **Format**: Use WebP for best performance (JPEG/PNG also supported)
- **Size**: Max 1920x1080px, optimize to <500KB per image
- **Aspect Ratio**: 16:9 or 4:3 recommended
- **Quality**: 80-85% compression

## How to Add Images
1. Create a `gallery` folder inside `public/`
2. Add your before/after photos with the exact names above
3. Use tools like [Squoosh](https://squoosh.app/) to optimize images
4. Convert to WebP format for better performance

## Temporary Placeholder
Until you add real images, you can use placeholder services:
- Replace image paths in Gallery.tsx with: `https://placehold.co/800x600/png?text=Before+Photo`
- Or use Unsplash: `https://source.unsplash.com/800x600/?electrical,wiring`

## Example Images You Should Capture
1. **House Wiring**: Before (old wiring) → After (new installation)
2. **Commercial Setup**: Before (bare shop) → After (complete setup)
3. **Ceiling Fan**: Before (old/broken) → After (new installation)
4. **Panel Board**: Before (old fuse box) → After (modern MCB)
5. **LED Lights**: Before (old bulbs) → After (LED installation)
6. **Motor**: Before (damaged motor) → After (repaired/new motor)

## Image Optimization Tips
- Take photos in good lighting
- Show clear contrast between before/after
- Keep composition consistent
- Add your watermark for branding
- Use photo editing to enhance quality

## Update Gallery Component
If you want different projects, edit the `projects` array in:
`src/components/Gallery.tsx`
