import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { AddAnnouncementComponentComponent } from "../add-announcement/add-announcement.component";

export class CanDeactivateGuard implements CanDeactivate<AddAnnouncementComponentComponent>{
    canDeactivate(component:AddAnnouncementComponentComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot){
        return component.canExit();
    }
}