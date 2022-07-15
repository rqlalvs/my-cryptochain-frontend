import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';

const routes: Routes = [
  {path: '', component: BlockchainViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
