import db from '../../db.json';

export default function dbHnadler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }
  response.setHeader('Acess-Control-Allow-Credentials', true);
  response.setHeader('Acess-control-Allow-Origin', '*');
  response.setHeader('Acess-Control-Allow-Methods','GET, OPTIONS, PATCH, DELETE, POST, PUT');
  response.json(db);
}