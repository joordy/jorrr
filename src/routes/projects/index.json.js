import { projects } from './_data';
import { v4 as uuidv4 } from 'uuid';

export function get(req, res, next) {
  res.end(JSON.stringify(projects));
}

export function post(req, res, next) {
  const { title, intro, details } = req.body;
  const id = uuidv4();

  jobs.push({ title, intro, details, id });

  res.end(JSON.stringify(projects));
}
