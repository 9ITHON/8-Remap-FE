export default function SVG({
  SVGcomponent,
  width,
  height,
}: {
  SVGcomponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={
        width && height ? { width: `${width}px`, height: `${height}px` } : {}
      }
    >
      <SVGcomponent />
    </div>
  );
}
