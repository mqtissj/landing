import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

interface SkillsRadarProps {
  data: { subject: string; level: number }[];
  cobalHsl: string;
  gridHsl: string;
  labelHsl: string;
}

export const SkillsRadar = ({ data, cobalHsl, gridHsl, labelHsl }: SkillsRadarProps) => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
      <PolarGrid stroke={gridHsl} strokeWidth={1} />
      <PolarAngleAxis
        dataKey="subject"
        tick={{
          fontSize: 10,
          fill: labelHsl,
          fontFamily: "Inter, Work Sans, sans-serif",
          fontWeight: 500,
          letterSpacing: "0.08em",
        }}
      />
      <Radar
        dataKey="level"
        stroke={cobalHsl}
        fill={cobalHsl}
        fillOpacity={0.12}
        strokeWidth={1.5}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default SkillsRadar;
