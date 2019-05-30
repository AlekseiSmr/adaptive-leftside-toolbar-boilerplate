import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SettingsIconComponent } from './components/settings-icon/settings-icon.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [SidebarComponent, SettingsIconComponent, MenuComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SidebarComponent, MenuComponent],
})
export class SharedModule {}
