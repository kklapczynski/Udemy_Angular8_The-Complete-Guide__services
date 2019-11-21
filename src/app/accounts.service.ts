import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'  // this way or by adding service in app.module.ts in providers we make service app-wide available
})

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
    
    constructor(private loggingService: LoggingService) {}

    onAccountAdded(name: string, status: string) {
        this.accounts.push({ name, status });
        this.loggingService.logStatus(status);
        console.log(this.accounts);
    }

    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatus(newStatus);
    }
}