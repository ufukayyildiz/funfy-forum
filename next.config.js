/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/user/:id',
        destination: '/user/:id/posts',
        permanent: true,
      },
      {
        source: '/topic/:id',
        destination: '/topic/:id/new',
        permanent: true,
      },

      module.exports = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL= 'https://mymszlfpxqgqgxocdopb.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bXN6bGZweHFncWd4b2Nkb3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4Mjk0NzAsImV4cCI6MjAzNjQwNTQ3MH0.onp7rgtKEQwlTIBE0GWybfu1auatpKKWT-38vqJF9zY',
  },
},
    ];
  },
};

module.exports = nextConfig;
