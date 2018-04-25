module.exports = {
  source: "./posts",
  output: "./sites",
  theme: "./site/theme",
  port: 8000,
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ]
};
