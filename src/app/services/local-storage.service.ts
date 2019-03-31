import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   *
   * @param property string - Local storage property to search or set value
   * @param userId string - userID
   * @param itemId  string - item you want to check
   * @param location string - which property you want to chanege or set
   */
  isLiked(property: string, id: string, userId: string, location: string): boolean {

      const items = JSON.parse(localStorage.getItem(property));

      if (items !== null) {
        const itemIndex = items.findIndex( user => user.id === id );
        if ( itemIndex > -1) {
          if (items[itemIndex][location]) {
            const Index = items[itemIndex][location].findIndex( artist => artist ===  userId);
            if ( Index > -1 ) {
              return true;
            }
          }
        }
      }

      return false;

  }

  /**
   *
   * @param property string - Local storage property to search or set value
   * @param userId string - userID
   * @param itemId  string - item you want to check
   * @param location string - which property you want to chanege or set
   */
  likedItem( property: string, userId: string, itemId: string, location: string ): void {
    const temp = [];

    const items = JSON.parse(localStorage.getItem(property));
    if (items === null) {
       temp.push({
        id: userId,
        artistLikes: location === 'artistLikes' ? [itemId] : [],
        songsLikes: location === 'songsLikes' ? [itemId] : []
      });
      localStorage.setItem(property, JSON.stringify(temp));
    } else {
      const itemIndex = items.findIndex( item => item.id === userId );
      if ( itemIndex > -1) {
        if (items[itemIndex][location]) {
          const Index = items[itemIndex][location].findIndex( artist => artist === itemId );
          if ( Index === -1 ) {
            items[itemIndex][location].push(itemId);
          }
          localStorage.setItem(property, JSON.stringify(items));
        }
      } else {
        items.push({
          id: userId,
          artistLikes: location === 'artistLikes' ? [itemId] : [],
          songsLikes: location === 'songsLikes' ? [itemId] : []
        });
        localStorage.setItem(property, JSON.stringify(items));
      }
    }
  }
}
