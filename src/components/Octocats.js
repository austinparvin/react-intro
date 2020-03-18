import React, { Component } from 'react'
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
    return (
      <main>
        <section>
          <a href="https://octodex.github.com/terracottocat/">
            <img class="octo-img" src={Terracottocat} alt="Terracottocat" />
          </a>
          <header>
            <p>
              #149:{' '}
              <a href="https://octodex.github.com/terracottocat/">
                Terracottocat
              </a>
            </p>
            <a>
              <img src="https://github.com/chubbmo.png" alt="chubbmo" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/octogatos/">
            <img class="octo-img" src={Octogatos} alt="Octogatos" />
          </a>
          <header>
            <p>
              #148:{' '}
              <a href="https://octodex.github.com/octogatos/">Octogatos</a>
            </p>
            <a href="https://github.com/cameronfoxly">
              <img src={OctogatosOwner} alt="cameronfoxly" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/adacats/">
            <img class="octo-img" src={Adacats} alt="Adacats" />
          </a>
          <header>
            <p>
              #147: <a href="https://octodex.github.com/adacats/">Adacats</a>
            </p>
            <a href="https://github.com/cameronfoxly">
              <img src={OctogatosOwner} alt="cameronfoxly" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/fintechtocat/">
            <img class="octo-img" src={Fintechtocat} alt="Fintechtocat" />
          </a>
          <header>
            <p>
              #146:{' '}
              <a href="https://octodex.github.com/fintechtocat/">
                Fintechtocat
              </a>
            </p>
            <a href="https://github.com/ceciliorz">
              <img src={FintechtocatOwner} alt="ceciliorz" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/brennatocat/">
            <img class="octo-img" src={Brennatocat} alt="Brennatocat" />
          </a>
          <header>
            <p>
              #145:{' '}
              <a href="https://octodex.github.com/brennatocat/">Brennatocat</a>
            </p>
            <a href="https://github.com/johncreek">
              <img src={BrennatocatOwner} alt="johncreek" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/filmtocats/">
            <img class="octo-img" src={Filmtocats} alt="filmtocats" />
          </a>
          <header>
            <p>
              #144:{' '}
              <a href="https://octodex.github.com/filmtocats/">Filmtocats</a>
            </p>
            <a href="https://github.com/heyhayhay">
              <img src={FilmtocatsOwner} alt="heyhayhay" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/sentrytocat/">
            <img class="octo-img" src={Sentrytocat} alt="Sentrytocat" />
          </a>
          <header>
            <p>
              #143:{' '}
              <a href="https://octodex.github.com/sentrytocat/">Sentrytocat</a>
            </p>
            <a href="https://github.com/cameronmcefee">
              <img src={SentrytocatOwner} alt="cameronmcefee" />
            </a>
          </header>
        </section>
        <section>
          <a href="https://octodex.github.com/umbrellatocat/">
            <img class="octo-img" src={Umbrellatocat} alt="Umbrellatocat" />
          </a>
          <header>
            <p>
              #142:{' '}
              <a href="https://octodex.github.com/umbrellatocat/">
                Umbrellatocat
              </a>
            </p>
            <a href="https://github.com/rubyjazzy">
              <img src={UmbrellatocatOwner} alt="rubyjazzy" />
            </a>
          </header>
        </section>
      </main>
    )
  }
}

export default Octocats
