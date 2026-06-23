export default function localImageLoader({ src, width }: any) {
  const lastDot = src.lastIndexOf('.');
  const base = src.slice(0, lastDot);
  const ext = src.slice(lastDot + 1);
  return `/optimized${base}-${width}.${ext}`;
}   