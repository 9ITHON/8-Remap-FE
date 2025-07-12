export default function SVG({
  SVGcomponent,
  width,
  height,
  bg,
  stroke,
}: {
  SVGcomponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  bg?: string;
  stroke?: string;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={
        width && height ? { width: `${width}px`, height: `${height}px` } : {}
      }
    >
      <SVGcomponent
        fill={bg ? bg : 'none'}
        stroke={stroke && stroke}
      />
    </div>
  );
}
