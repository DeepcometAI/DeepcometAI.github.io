import { getCollection } from 'astro:content';

export async function GET() {
  const docs = await getCollection('docs');
  const blog = await getCollection('blog');
  const ecosystem = await getCollection('ecosystem');

  const allData = [
    ...docs.map(doc => ({
      title: doc.data.title,
      description: doc.data.description,
      slug: `/docs/${doc.slug}`,
      body: doc.body,
      type: 'Doc'
    })),
    ...blog.map(post => ({
      title: post.data.title,
      description: `Published by ${post.data.author}`,
      slug: `/blog/${post.slug}`,
      body: post.body,
      type: 'Blog'
    })),
    ...ecosystem.map(item => ({
      title: item.data.title,
      description: item.data.description,
      slug: `/ecosystem/${item.slug}`,
      body: item.body,
      type: 'Ecosystem'
    }))
  ];

  return new Response(JSON.stringify(allData), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
