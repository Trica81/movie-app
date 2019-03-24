import { NgModule } from '@angular/core';


import { MusicSearchPipe } from 'src/app/pipes/music-search.pipe';
import { MusicSearchComponent } from '../modules/music-list/components/music-search/music-search.component';
import { DurationPipe } from '../pipes/duration.pipe';
import { PointerDirective } from '../directive/pointer.directive';

@NgModule({
    declarations: [
        MusicSearchComponent,
        MusicSearchPipe,
        DurationPipe,
        PointerDirective
    ],
    exports: [
        MusicSearchComponent,
        MusicSearchPipe,
        DurationPipe,
        PointerDirective
    ]
})

export class SharedModule {}
