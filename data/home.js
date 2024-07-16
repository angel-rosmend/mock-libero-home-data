const getData = (req) => ({
  metadata: {
    title: "title",
    caconicalUrl: "/",
    abstract: "description",
  },
  layout: "homepage-1",
  slots: {
    header: [
      {
        module: "chip-component",
        contents: [
          { type: "link", title: "dossieraggio", url: "/" },
          { type: "link", title: "abruzzo", url: "/" },
          { type: "link", title: "Jannik Sinner", url: "/" },
        ],
      },
      {
        module: "select-category",
        contents: [
          { type: "placeholder", title: "categorie", url: "/" },
          { type: "option", title: "Politica", url: "/" },
          { type: "option", title: "Giustizia", url: "/" },
          { type: "option", title: "Cronaca", url: "/" },
          { type: "option", title: "Spettacolo", url: "/" },
          { type: "option", title: "Esteri", url: "/" },
          { type: "option", title: "Economia", url: "/" },
          { type: "option", title: "Sport", url: "/" },
          { type: "option", title: "Blog", url: "/" },
          { type: "option", title: "Podcast", url: "/" },
          { type: "option", title: "Libero TV", url: "/" },
        ],
      },
      {
        module: "libero-ora",
        contents: [
          {
            type: "podcast",
            resource: "/",
            coverImage: "/",
            title: "title",
          },
        ],
      },
    ],
    hero: [
      {
        module: "anteprima-apertura",
        contents: [
          {
            type: "article",
            abstract:
              "Da “cambia il vento” a “in Abruzzo vinciamo facile”, dopo la Sardegna la sinistra s’era convinta d’aver svoltato. E ha fatto ogni errore possibile.",
            category: "Tipologia",
            author: "Nome Cognome",
            enhancedTitle: [
              { type: "text", content: "CI" },
              {
                type: "image",
                image: {
                  url: `${req.protocol}://${req.get('host')}/images/hero/hero-1.png`,
                  alt: "",
                },
              },
              { type: "text", content: "AVEVANO" },
              {
                type: "image",
                image: {
                  url: `${req.protocol}://${req.get('host')}/images/hero/hero-2.png`,
                  alt: "",
                },
              },
              { type: "text", content: "Creduto" },
            ],
          },
          {
            type: "article",
            overtitle: "OK DELL’EUROPA",
            title:
              "Case green, arriva l'ok definitivo all'Europarlamento: cosa cambia",
          },
        ],
      },
    ],
    "main-section": [
      {
        module: "taglio-default",
        contents: [
          {
            type: "article",
            tag: "La Direttiva",
            title: "Cinque milioni di case da rifare in tutta italia",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/main/main-1.png`, alt: "" },
            abstract:
              "L'obiettivo della cosiddetta direttiva case green è ridurre progressivamente le emissioni di gas serra e i consumi energetici degli edifici entro il 2030, così da arrivare alla neutralità climatica entro il 2050.",
            author: "Elisabetta Manzoni",
          },
          {
            type: "article",
            href: "/",
            overtitle: "Ok dell'Europa",
            title:
              "Case green, arriva l'ok definitivo all'Europarlamento: cosa cambia",
          },
          {
            type: "article",
            href: "/",
            overtitle: "Leghista espulso",
            title:
              "Casa green, sì all'Europarlamento? Ciocca, fischietto e cartellino rosso",
          },
          {
            type: "article",
            tag: "Editoriale",
            title: "La bugia della pace senza i fucili",
            abstract:
              "Bollettino dal campo di battaglia della contemporaneità. In Ucraina la Russia riconquista terreno e l’esercito di Kiev, a corto di munizioni e copertura aerea, ripiega. Un altro fronte (...)",
            author: "Mario Sechi",
          },
        ],
      },
      {
        module: "taglio-default",
        contents: [
          {
            type: "article",
            title:
              "uccisi sette operatori umanitari a Gaza mentre distribuivano aiuti",
            href: "/",
            abstract:
              "L'obiettivo della cosiddetta direttiva case green è ridurre progressivamente le emissioni di gas serra e i consumi energetici degli edifici entro il 2030, così da arrivare alla neutralità climatica entro il 2050.",
            image: { url: `${req.protocol}://${req.get('host')}/images/main/main-2.png`, alt: "" },
            author: "",
            timeline: [
              {
                timestamp: "2024-06-26T10:12:21.068Z",
                abstract:
                  "Idf promette indagine indipendente su attacco Wck: “Sincero dolore”",
              },
              {
                timestamp: "2024-06-26T10:12:07.651Z",
                abstract:
                  "Wck: “Movimenti del convoglio erano coordinati con l'Idf”",
              },
              {
                timestamp: "2024-06-26T10:08:51.212Z",
                abstract:
                  "Media: un drone degli Houti ha colpito la zona israeliana di Eilat",
              },
            ],
          },
          {
            type: "article",
            overtitle: "Ok dell'Europa",
            title:
              "Case green, arriva l'ok definitivo all'Europarlamento: cosa cambia",
            href: "/",
          },
        ],
      },
      {
        module: "taglio-default",
        contents: [
          {
            type: "article",
            tag: "imbarazzo in TV",
            title: "Vanno picchiati Raimo choc in tv, cala il gelo in studio",
            href: "/",
            abstract:
              "L'obiettivo della cosiddetta direttiva case green è ridurre progressivamente le emissioni di gas serra e i consumi energetici degli edifici entro il 2030, così da arrivare alla neutralità climatica entro il 2050.",
            image: { url: `${req.protocol}://${req.get('host')}/images/main/main-3.png`, alt: "" },
            author: "Elisabetta Manzoni",
          },
          {
            type: "article",
            overtitle: "imbarazzo",
            title:
              "Raimo-Bernardini de Pace, rissa in tv: 'Marchesa, ci inviti a casa sua!', 'Imbarazzante'",
            href: "/",
          },
        ],
      },
      {
        module: "taglio-wide",
        contents: [
          {
            type: "article",
            title: "Apple-spotify, le ragioni della guerra",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/main/main-4.png`, alt: "" },
          },

          {
            type: "article",
            overtitle: "Ok dell'Europa",
            title:
              "Case green, arriva l'ok definitivo all'Europarlamento: cosa cambia",
            href: "/",
          },
          {
            type: "article",
            overtitle: "Leghista espulso",
            title:
              "Casa green, sì all'Europarlamento? Ciocca, fischietto e cartellino rosso",
            href: "/",
          },
          {
            type: "article",
            tag: "Editoriale",
            title: "La bugia della pace senza i fucili",
            abstract:
              "Bollettino dal campo di battaglia della contemporaneità. In Ucraina la Russia riconquista terreno e l’esercito di Kiev, a corto di munizioni e copertura aerea, ripiega. Un altro fronte (...)",
            author: "Mario Sechi",
          },
        ],
      },
      {
        module: "taglio-default",
        contents: [
          {
            type: "article",
            tag: "lacrime in tv",
            title:
              "Fedez in lacrime davanti alla Fagnani: il retroscena su 'Belve'",
            abstract:
              "Fedez in lacrime durante la registrazione della puntata di Belve. Secondo quanto riporta l’Adnkronos, il rapper si sarebbe commosso fino alle lacrime durante l’intervista con Francesca Fagnani, registrata ieri negli studi del centro Rai Nomentano intitolato a Fabrizio Frizzi.",
            author: "Elisabetta Manzoni",
            category: "Tipologia",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/main/main-5.png`, alt: "" },
          },
        ],
      },
    ],
    sidebar: [
      {
        module: "sidebar",
        contents: [
          {
            type: "label",
            label: "Opinion",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-1.png`,
              alt: "articolo-xs-image",
            },
            title: "L’agenda Giorgia alla Casa Bianca",
            abstract:
              "Bollettino dal campo di battaglia della contemporaneità. In Ucraina la Russia riconquista terreno e l’esercito.",
            category: "Editoriale",
            author: "Mario Sechi",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-2.png`,
              alt: "articolo-xs-image",
            },
            title: "Quello che si è schierato contro zan, in lista con zan",
            abstract:
              "Siamo giunti al venerdì Santo e i giornali di oggi sono dominati da una figura centrale, quella di Ilaria Salis.",
            category: "Analisi",
            author: "Daniele Capezzone",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-3.png`,
              alt: "articolo-xs-image",
            },
            title:
              "Maurizio Landini ha scoperto il vero John Elkann tagli e fughe all'estero",
            abstract:
              "Quando gli Agnelli-El kann decisero di offrire la Fiat in pasto ai francesi,  Landini parlò, senza pensarci più di tanto, di «opportunità».",
            adv: "Sponsorizzato da Nomeazienda",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-4.png`,
              alt: "articolo-xs-image",
            },
            title: "L’agenda Giorgia alla Casa Bianca",
            abstract:
              "Bollettino dal campo di battaglia della contemporaneità. In Ucraina la Russia riconquista terreno e l’esercito",
            category: "Tipologia",
            author: "Nome Cognome",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-2.png`,
              alt: "articolo-xs-image",
            },
            title: "Quello che si è schierato contro zan, in lista con zan",
            abstract:
              "Siamo giunti al venerdì Santo e i giornali di oggi sono dominati da una figura centrale, quella di Ilaria Salis.",
            category: "Tipologia",
            author: "Nome Cognome",
          },
          {
            type: "article",
            href: "/",
            image: {
              url: `${req.protocol}://${req.get('host')}/images/sidebar/sidebar-3.png`,
              alt: "articolo-xs-image",
            },
            title:
              "Maurizio Landini ha scoperto il vero John Elkann: tagli e fughe all'estero",
            abstract:
              "Quando gli Agnelli-El kann decisero di offrire la Fiat in pasto ai francesi,  Landini parlò, senza pensarci più di tanto, di «opportunità».",
            category: "Tipologia",
            author: "Nome Cognome",
          },
        ],
      },
    ],
    "argument-5-article": [
      {
        module: "argumment-5-article",
        contents: [
          { type: "label", label: "sport" },
          {
            type: "article",
            label: "la previsioine",
            title: "Alcaraz fuori terribile pressione su Sinner",
            summary:
              "Per Jannik Sinner le porte del secondo posto nel ranking cominciano a schiudersi.",
            category: "Tipologia",
            author: "Nome Cognome",
            abstract:
              "Il commento, entusiasta, di questo clamoroso turning point a favore del tennista italiano viene da Ubaldo Scanagatta, direttore di Ubitennis: “È accaduto ciò che nessuno si aspettava, cioè che Alcaraz potesse perdere contro Dmitrov e con questo punteggio, cioè 6-2, 6-4 e con Dmitrov che ha avuto anche la palla break del 5-1 nel secondo set e l'ha mancata, altrimenti probabilmente lo avrebbe vinto 6-1.",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/argument/1.png`, alt: "/" },
          },
          {
            type: "article",
            overtitle: "overtitle",
            title:
              "Jannik Sinner, non solo tennis a Miami: perché spopola fuori dal campo",
            date: "data",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/argument/2.png`, alt: "/" },
          },
          {
            type: "article",
            overtitle: "overtitle",
            title:
              "Sinner, il punto dell'anno sconvolge i commentatori britannici: urla in diretta | Video",
            href: "/",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/argument/3.png`, alt: "/" },
          },
          {
            type: "article",
            overtitle: "overtitle",
            title:
              "Serie Avvelenata, stagione inquinata da troppe polemiche: pessima figura all'estero",
            href: "/",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/argument/4.png`, alt: "/" },
          },
          {
            type: "article",
            overtitle: "overtitle",
            title:
              "'A cosa gioco con Gigio Donnarumma': la spiazzante rivelazione di Jannik Sinner",
            href: "/",
            category: "Tipologia",
            author: "Nome Cognome",
            date: "Data",
            image: { url: `${req.protocol}://${req.get('host')}/images/argument/5.png`, alt: "/" },
          },
        ],
      },
    ],
    "section-special": [
      {
        module: "section-special",
        contents: [
          { type: "label", label: "TV Mania" },
          {
            type: "article",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/1.png`, alt: "/" },
            href: "/",
            title: "'IL CEREALE GIAPPONESE' SCONCERTO A L’EREDITà",
            correlato: [
              {
                title:
                  "apre il pacco e perde 300.000 euro: la reazione del cameraman",
                href: "/",
              },
              {
                title:
                  "Dai dammi 1 euro, 'Sapeva?': il pacco che scatena i sospetti",
                href: "/",
              },
            ],
          },
          {
            type: "article",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/2.png`, alt: "/" },
            href: "/",
            title: "dramma ad affari tuoi “colpa dei calzini”",
            correlato: [
              {
                title:
                  "L'Eredità, Pierpaolo vince alla Ghigliottina: 'Abbinamenti già usato'",
                href: "/",
              },
              {
                title: "Iacometti contro la Boldrini: L'allegra brigata",
                href: "/",
              },
            ],
          },
          {
            type: "article",
            overtitle: "overtitle",
            title:
              " Chiara Ferragni fatta fuori da Della Valle: una pesantissima sentenza anticipata",
            category: "Tipologia",
            author: "Nome Cognome",
            date: "Data",
            href: "/",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/3.png`, alt: "" },
            adv: "Sponsorizzato da Nomeazienda",
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "Canale 5, X-Style di Giorgia Venturini gode di ottima salute: i picchi che sorprendono la tv",
            date: "data",
            category: "Tipologia",
            author: "Nome Cognome",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/4.png`, alt: "/" },
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "Briatore e il tumore, non lo lascio solo. Il dramma di Gregoraci in ospedale | Guarda",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/5.png`, alt: "/" },
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "I tempi di Nettuno Branko l'oroscopo il segno con una grande giornata davanti",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/6.png`, alt: "/" },
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "Annalisa, sarà la festa della libertà. Madrina del Roma Pride: la sua discesa in campo",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/7.png`, alt: "/" },
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "Kate Middleton e il tumore, chi c'è al timone della famiglia non è William",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/8.png`, alt: "/" },
          },
          {
            type: "article",
            href: "/",
            overtitle: "overtitle",
            title:
              "Re Carlo, il volto stravolto e attenzione agli occhi: le immagini spaventano Londra",
            date: "data",
            image: { url: `${req.protocol}://${req.get('host')}/images/special/9.png`, alt: "/" },
          },
        ],
      },
    ],
    footer: [
      {
        module: "banner",
        contents: [
          {
            title:
              "<b> Acquista un abbonamento </b> ottieni dei super vantaggi",
            abstract:
              "Potrai sfogliare la rivista online, leggere tutte le edizioni locali, ricevere a casa il giornale cartaceo",
            ctaLabelLeft: "SFOGLIA IL GIORNALE",
            ctaLabelRight: "Acquista abbonamento",
            ctaURlLeft: "/",
            ctaURLRight: "/",
          },
        ],
      },
      {
        module: "sections",
        contents: [
          {
            title: "sezioni",
            items: [
              { url: "/", label: "Home" },
              { url: "/", label: "Politica" },
              { url: "/", label: "Giustizia" },
              { url: "/", label: "Terra Promessa" },
              { url: "/", label: "Rissa Politica" },
              { url: "/", label: "Italia" },
              { url: "/", label: "Europa" },
              { url: "/", label: "Esteri" },
              { url: "/", label: "Economia" },
              { url: "/", label: "Spettacoli" },
              { url: "/", label: "Sport" },
              { url: "/", label: "Libero video" },
              { url: "/", label: "Meteo" },
              { url: "/", label: "Milano" },
            ],
          },
          {
            title: "Espettacoli",
            items: [
              { label: "Televisione", url: "/" },
              { label: "Gossip & Trash", url: "/" },
              { label: "Il Diario di Costanzo", url: "/" },
              { label: "Video by Vista", url: "/" },
            ],
          },
          [
            {
              title: "Scienze e Tech",
              items: [
                { label: "Alimentazione e Benessere", url: "/" },
                { label: "Salute", url: "/" },
              ],
            },
            {
              title: "altro",
              items: [
                { label: "Blog", url: "/" },
                { label: "Libero TV", url: "/" },
                { label: "Podcast", url: "/" },
                { label: "Le Stelle di Branko", url: "/" },
              ],
            },
          ],
        ],
      },
      {
        module: "policies",
        contents: [
          {
            type: "items",
            items: [
              { label: "Contatti", url: "/" },
              { label: "Pubblicità", url: "" },
              { label: "Cookie Policy", url: "/" },
              { label: "Gestione Cookie", url: "/" },
              { label: "Privacy policy", url: "/" },
              { label: "Condizioni generali", url: "/" },
              { label: "Credits", url: "/" },
            ],
          },
        ],
      },
      {
        module: "copyright",
        content: [
          {
            type: "text",
            title:
              "Editoriale Libero S.r.l. - Sede Legale: Via dell’Aprica 18, 20158 Milano - Registro Imprese di Milano Monza Brianza Lodi: C.F. e P.IVA 06823221004 - R.E.A. Milano n. 1690166 Cap. Soc. € 400.000,00 i.v. </br> Tutti i diritti riservati - ISSN (sito web): 2531-6370",
          },
        ],
      },
    ],
  },
})

module.exports = getData;
