export default {
  input: 'dist/index.js',
  output: {
    name: 'ng.dataform',
    format: 'umd',
    file: 'dist/bundles/dataform.umd.js',
    sourcemap: false,
    globals: {
      '@angular/core': 'ng.core',
      '@angular/http': 'ng.http',
      '@angular/common': 'ng.common',
      '@angular/forms': 'ng-forms'
    }
  },
  
};