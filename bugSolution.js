// Improved solution using absolute paths for dynamic imports
// components/A.js (Server Component)
async function A() {
  const { B } = await import('/components/B'); //Absolute path
  return <B/>;
}
export default A;

// components/B.js (Server Component)
function B() {
  return <p>Component B</p>;
}
export default B;

// pages/index.js (Page Component)
function Index() {
  return <A/>;
}
export default Index;

//Alternative solution: Refactor to avoid deep nesting. Consider breaking down large components into smaller, more manageable units.  This often improves code organization and reduces the likelihood of this type of error.