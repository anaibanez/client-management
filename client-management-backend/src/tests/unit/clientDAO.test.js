const clientDAO = require('../../util/clientDAO');
const Client = require('../../models/client');

jest.mock('jsonfile');

const initialData = [
  { id: 1, username: 'UserName1' },
  { id: 2, username: 'UserName2' }
];

describe('## ClientDAO unit tests', () => {
  beforeEach(() => {
    clientDAO.setData([...initialData]);
  });

  it('should retrieve all the clients', async() => {
    const clients = await clientDAO.getClients();
    expect(clients).toHaveLength(2);
  });

  it('should retrieve a client', async() => {
    const client = await clientDAO.getClient(1);
    expect(client).toEqual(new Client(initialData[0]));
  });

  it('should create a new client', async() => {
    const client = new Client({ username: 'Username3' });
    const initialClientList = await clientDAO.getClients();
    const newClient = await clientDAO.createClient(client);
    const finalClientList = await clientDAO.getClients();
    expect(finalClientList).toHaveLength(initialClientList.length + 1);
    expect(newClient.id).toBeGreaterThan(1);
  });

  it('should update a client', async() => {
    const clientData = new Client({ id: 1, username: 'UsernameChanged' });
    await clientDAO.updateClient(1, clientData);
    const clientChanged = await clientDAO.getClient(1);
    expect(clientChanged.username).toBe('UsernameChanged');
  });

  it('should delete a client', async() => {
    const initialClientList = await clientDAO.getClients();
    await clientDAO.deleteClient(1);
    const finalClientList = await clientDAO.getClients();
    expect(finalClientList).toHaveLength(initialClientList.length - 1);
  });
});
