import {Injectable} from '@angular/core';
import {Track} from '../../tracks/models/track.model';

@Injectable()
export class AuthenticatedUserLikedTrack extends Track {
  endpoint = '/me/favorites';
}