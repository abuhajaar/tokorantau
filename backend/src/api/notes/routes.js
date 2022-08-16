const routes = (handler) => [
  {
    method: 'POST',
    path: '/produk',
    handler: handler.postNoteHandler,
  },
  {
    method: 'GET',
    path: '/produk',
    handler: handler.getNotesHandler,
  },
  {
    method: 'GET',
    path: '/produk/{id}',
    handler: handler.getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/produk/{id}',
    handler: handler.putNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/produk/{id}',
    handler: handler.deleteNoteByIdHandler,
  },
];

module.exports = routes;
