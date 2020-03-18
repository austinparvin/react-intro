import React, { Component } from 'react'
import Card from './Card'
import Terracottocat from '../images/Terracottocat_Single.png'
import Octogatos from '../images/Octogatos.png'
import OctogatosOwner from '../images/Octogatos_owner.jpeg'
import Adacats from '../images/Adacats.png'
import Fintechtocat from '../images/Fintechtocat.png'
import FintechtocatOwner from '../images/Fintechtocat_owner.jpeg'
import Brennatocat from '../images/Brennatocat.png'
import BrennatocatOwner from '../images/Brennatocat_owner.png'
import Filmtocats from '../images/filmtocats.png'
import FilmtocatsOwner from '../images/Filmtocats_owner.jpeg'
import Sentrytocat from '../images/Sentrytocat_octodex.jpg'
import SentrytocatOwner from '../images/Sentrytocat_owner.jpeg'
import Umbrellatocat from '../images/puddle_jumper_octodex.jpg'
import UmbrellatocatOwner from '../images/puddle_jumper_octodex_owner.jpeg'

export class Octocats extends Component {
  render() {
    const cats = [
      {
        name: 'Terracottocat',
        url: 'https://octodex.github.com/terracottocat/',
        imgUrl: Terracottocat,
        num: '#149: ',
        owner: 'chubbmo',
        ownerImgUrl: 'https://github.com/chubbmo.png',
        ownerUrl: 'google.com',
      },
      {
        name: 'Octogatos',
        url: 'https://octodex.github.com/octogatos/',
        imgUrl: Octogatos,
        num: '#148: ',
        owner: 'cameronfoxly',
        ownerImgUrl: OctogatosOwner,
        ownerUrl: 'https://github.com/cameronfoxly',
      },
      {
        name: 'Adacats',
        url: 'https://octodex.github.com/adacats/',
        imgUrl: Adacats,
        num: '#147: ',
        owner: 'cameronfoxly',
        ownerImgUrl: OctogatosOwner,
        ownerUrl: 'https://github.com/cameronfoxly',
      },
      {
        name: 'Fintechtocat',
        url: 'https://octodex.github.com/fintechtocat/',
        imgUrl: Fintechtocat,
        num: '#146: ',
        owner: 'ceciliorz',
        ownerImgUrl: FintechtocatOwner,
        ownerUrl: 'https://github.com/ceciliorz',
      },
      {
        name: 'Brennatocat',
        url: 'https://octodex.github.com/brennatocat/',
        imgUrl: Brennatocat,
        num: '#145: ',
        owner: 'johncreek',
        ownerImgUrl: BrennatocatOwner,
        ownerUrl: 'https://github.com/johncreek',
      },
      {
        name: 'Filmtocats',
        url: 'https://octodex.github.com/filmtocats/',
        imgUrl: Filmtocats,
        num: '#144: ',
        owner: 'heyhayhay',
        ownerImgUrl: FilmtocatsOwner,
        ownerUrl: 'https://github.com/heyhayhay',
      },
      {
        name: 'Sentrytocat',
        url: 'https://octodex.github.com/sentrytocat/',
        imgUrl: Sentrytocat,
        num: '#143: ',
        owner: 'cameronmcefee',
        ownerImgUrl: SentrytocatOwner,
        ownerUrl: 'https://github.com/cameronmcefee',
      },
      {
        name: 'Umbrellatocat',
        url: 'https://octodex.github.com/umbrellatocat/',
        imgUrl: Umbrellatocat,
        num: '#142: ',
        owner: 'rubyjazzy',
        ownerImgUrl: UmbrellatocatOwner,
        ownerUrl: 'https://github.com/rubyjazzy',
      },
    ]
    return (
      <main>
        {cats.map(cat => {
          return (
            <Card
              name={cat.name}
              url={cat.url}
              imgUrl={cat.imgUrl}
              num={cat.num}
              owner={cat.owner}
              ownerUrl={cat.ownerUrl}
              ownerImgUrl={cat.ownerImgUrl}
            />
          )
        })}
      </main>
    )
  }
}

export default Octocats
