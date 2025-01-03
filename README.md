# Next.js 15 Server Component Dynamic Import Issue

This repository demonstrates a subtle bug in Next.js 15 related to dynamic imports within server components, particularly when those components are nested deeply within the application's directory structure.

## Problem Description

When using `import()` to dynamically import server components nested many levels deep, Next.js's path resolution mechanism can fail unexpectedly.  This leads to build or runtime errors indicating that the imported component cannot be found, even when the path is correct.  The behavior isn't consistent and can be difficult to debug.

## Reproduction

The `bug.js` file contains a simplified reproduction of the issue.  Uncomment the deeply nested component structure to trigger the error. 

## Solution

The `bugSolution.js` file provides a workaround by refactoring the import statements to use absolute paths or simplifying the component structure.