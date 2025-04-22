import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DurationChart = () => {
  // Using site theme colors directly in the component
  const colors = {
    bgDark: "#0a192f",
    bgMedium: "#112240",
    bgLight: "#233554",
    textPrimary: "#ccd6f6",
    textSecondary: "#8892b0",
    accentPrimary: "#64ffda",
    accentSecondary: "#7f5af0",
    borderColor: "#303C55"
  };

  // Format data for the chart
  const data = [
    { duration: '0-1 yr', PA: 1334133978, WC: 779781911 },
    { duration: '1-3 yrs', PA: 2590659855, WC: 1448834294 },
    { duration: '3-5 yrs', PA: 2510777496, WC: 1325414508 },
    { duration: '5-10 yrs', PA: 5803244538, WC: 2949015479 },
    { duration: '>10 yrs', PA: 20908247882, WC: 11189389429 },
  ];

  // Format large numbers for tooltip
  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        // Use inline styles matching the theme
        <div style={{
            backgroundColor: colors.bgMedium,
            border: `1px solid ${colors.borderColor}`,
            padding: '1rem',
            borderRadius: '5px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
         }}>
          <p style={{ color: colors.textPrimary, fontWeight: '600', marginBottom: '0.5rem' }}>{`Duration: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color, fontSize: '0.9rem' }}>
              {`${entry.name}: ${formatNumber(entry.value)}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    // Using inline styles for background matching the section style in CSS
    <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '5px', border: '1px solid var(--border-color)' }}>
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 50, bottom: 30 }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke={colors.borderColor} />
                <XAxis
                    dataKey="duration"
                    // Use fill directly for label instead of style for SVG elements
                    label={{ value: 'Duration Period', position: 'insideBottom', offset: -25, fill: colors.textSecondary }}
                    tick={{ fill: colors.textSecondary }}
                    dy={10}
                />
                <YAxis
                    tickFormatter={(value) => `${(value / 1000000000).toFixed(0)}B`}
                    label={{ value: 'Amount (Billions)', angle: -90, position: 'insideLeft', offset: -40, fill: colors.textSecondary }}
                    tick={{ fill: colors.textSecondary }}
                    dx={-5}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(100, 255, 218, 0.1)' }} />
                <Legend
                    wrapperStyle={{ paddingTop: "40px" }}
                    formatter={(value) => <span style={{ color: colors.textPrimary, marginRight: '10px' }}>{value}</span>}
                />
                <Bar dataKey="PA" name="Pension Annuities" stackId="a" fill={colors.accentPrimary} />
                <Bar dataKey="WC" name="Workers Compensation Annuities" stackId="a" fill={colors.accentSecondary} />
            </BarChart>
        </ResponsiveContainer>
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: colors.textSecondary }}>
            Chart showing distribution of Personal Accident and Workers Compensation exposure across different policy duration periods.
            <br />
            Note the significant concentration of exposure in policies with durations exceeding 10 years.
        </div>
    </div>
  );
};

export default DurationChart;