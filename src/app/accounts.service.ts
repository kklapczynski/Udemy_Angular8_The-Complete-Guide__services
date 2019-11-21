export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    
    onAccountAdded(name: string, status: string) {
        this.accounts.push({ name, status });
        console.log(this.accounts);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }
}