import { projects } from './_data';

export function get(req, res, next) {
  const { slug } = req.params;
  const project = projects.find((j) => j.slug == slug);

  if (project) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(project));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: `That project i haven't made yet.` }));
  }
}
