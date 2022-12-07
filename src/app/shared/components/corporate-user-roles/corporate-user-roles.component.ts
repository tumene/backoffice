import { Subject } from 'rxjs';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Permission, Role } from 'src/app/core/domain/customer-onboarding.model';
import { StorageService } from 'src/app/core/services/utils/storage.service';

@Component({
  selector: 'app-corporate-user-roles',
  templateUrl: './corporate-user-roles.component.html',
  styleUrls: ['./corporate-user-roles.component.scss']
})
export class CorporateUserRolesComponent implements OnInit {
  activeRoles: any[];
  redirectTo: string;
  selectedMainRole: any;
  @Output() selectedRoles = new Subject();
  @Input() backLink: any;
  @Input() userId: any;
  private _roles: Role[];
  loadedRoles: string[];
  @Input() set roles(input: Role[]) {
    this._roles = input;
    this.setAlreadySelectedRoles(input);
    console.log(this._roles)
  };
  get roles(): Role[] {
    return this._roles || [];
  }

  constructor(
    private readonly router: Router,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.activeRoles = [];
  }

  ngOnInit(): void {
  }

  setAlreadySelectedRoles(allRoles: Role[]) {
    if (allRoles) {
      const oldActiveRoles = this.storageService.getData("selected-roles");
      this.activeRoles = [];
      for (const item of allRoles) {
        item?.permissions.forEach(perm => {
          if (oldActiveRoles?.map((x: any) => x.id).indexOf(perm.id) > -1) {
            this.activeRoles.push({ ...perm, roleName: item.roleName, roleId: item.id });
            this.selectedMainRole = item.roleName;
          }
        })
      }
    }

  }

  toggle(roleId: any, permissionId: any): void {
    const role = this.roles.find((role) => role.id === roleId);
    const permission = role?.permissions.find((permission: Permission) => permission.id === permissionId);
    const selectedPermissionIndex = this.activeRoles?.findIndex(
      (permission: Permission) => permission.id === permissionId
    );
    if (selectedPermissionIndex > -1) {
      this.activeRoles.splice(selectedPermissionIndex, 1);
    } else {
      this.activeRoles.push({ roleName: role?.roleName, roleId: role?.id, ...permission });
    }
    this.selectedRoles.next(this.activeRoles);
  }

  isParentRoleActive(roleId: any): boolean {
    return true;
  }

  mainRoleChange(event: any) {
    if (event.value) {
      this.activeRoles = this.activeRoles.filter(x => x.roleName === event.value);
      this.selectedRoles.next(this.activeRoles);
    }
  }

  isRoleActive(roleId: any, permissionId: any, mainSelected = false): boolean {
    return this.activeRoles.some(
      (permission: any) => {
        return permission.id === permissionId;
      }
    );
  }
}
