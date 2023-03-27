// vite.config.js

export default {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '[name].[ext]',
        },
        plugins: [
          {
            name: 'image-loader',
            transform(code, id) {
              if (id.endsWith('.jpg')) {
                return {
                  code: `export default URL.createObjectURL(new Blob([${JSON.stringify(code)}], { type: 'image/jpeg' }));`,
                };
              }
            },
          },
        ],
      },
    },
  };
  