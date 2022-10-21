(function () {
  cercaPaginaNQ = document.querySelectorAll("table.tbMain");

  class costruiscoNodi {
    selezionaPrimaRiga = cercaPaginaNQ[0].querySelector("tbody tr");
    nuovaRiga = document.createElement("tr");
    nuovaCella = document.createElement("td");
    nuovaTabella = document.createElement("table");
    nuovoTbody = document.createElement("tbody");
    nuovaRiga1 = document.createElement("tr");

    strutturaBarraFunzioni() {
      //Costruisco la struttura
      this.selezionaPrimaRiga.after(this.nuovaRiga);
      this.nuovaRiga.append(this.nuovaCella);
      this.nuovaCella.append(this.nuovaTabella);
      this.nuovaTabella.append(this.nuovoTbody);
      this.nuovoTbody.append(this.nuovaRiga1);
      //Stile e testo
      setMultipleAttribute(this.nuovaTabella, { cellspacing: "0", cellpadding: "1", border: "0" });
      this.nuovaCella.setAttribute("class", "tdTopGrey");
    }
  }

  class eventiBarraFunzioni {
    constructor(cellaEventoTrigger) {
      this.cellaEventoTrigger = cellaEventoTrigger;
      this.cellaElementiSelect = document.querySelector("td.tdMainbody");
    }

    cercaElementiSelect() {
      this.cellaEventoTrigger.addEventListener("keyup", (e) => {
        this.elementiOption = this.cellaElementiSelect.querySelectorAll("option");
        let testoRicerca = e.target.value,
          testoRicercaLower = testoRicerca.toLowerCase();
        for (let i = 0; i < this.elementiOption.length; i++) {
          let testoOpzione = this.elementiOption[i].textContent || this.elementiOption[i].innerText,
            testoOpzioneLower = testoOpzione.toLowerCase();
          if (testoOpzioneLower.indexOf(testoRicercaLower) > -1) {
            this.elementiOption[i].style.display = "";
          } else {
            this.elementiOption[i].style.display = "none";
          }
        }
      });
    }

    ordinaElementiSelect() {
      this.cellaEventoTrigger.addEventListener("click", () => {
        const listaElementiSelect = this.cellaElementiSelect.querySelector("select");
        let arrayTemporaneo = new Array();
        for (let i = 0; i < listaElementiSelect.options.length; i++) {
          arrayTemporaneo[i] = new Array();
          arrayTemporaneo[i][0] = listaElementiSelect.options[i].text;
          arrayTemporaneo[i][1] = listaElementiSelect.options[i].value;
        }
        arrayTemporaneo.sort();
        while (listaElementiSelect.options.length > 0) {
          listaElementiSelect.options[0] = null;
        }
        for (let i = 0; i < arrayTemporaneo.length; i++) {
          let op = new Option(arrayTemporaneo[i][0], arrayTemporaneo[i][1]);
          listaElementiSelect.options[i] = op;
        }
      });
    }

    selezionaTuttiFile() {
      this.cellaEventoTrigger.addEventListener("click", () => {
        const tabellaFileManager = document.querySelectorAll("table.lightmain"),
          tabellaCheckBox = tabellaFileManager[1].querySelectorAll('[type="checkbox"]');
        for (let i = 0; i < tabellaCheckBox.length; i++) {
          tabellaCheckBox[i].checked = true;
        }
      });
    }

    cercaElementiCT() {
      this.cellaEventoTrigger.addEventListener("keyup", (e) => {
        this.elementiTabellaCT = document.querySelectorAll("table.lightmain tr");
        let testoRicerca = e.target.value,
          testoRicercaLower = testoRicerca.toLowerCase();
        for (let i = 0; i < this.elementiTabellaCT.length; i++) {
          let testoOpzione = this.elementiTabellaCT[i].textContent || this.elementiTabellaCT[i].innerText,
            testoOpzioneLower = testoOpzione.toLowerCase();
          if (testoOpzioneLower.indexOf(testoRicercaLower) > -1) {
            this.elementiTabellaCT[i].style.display = "";
          } else {
            this.elementiTabellaCT[i].style.display = "none";
          }
        }
      });
    }
  }

  class elementiBarraFunzioni extends costruiscoNodi {
    nuovaCellaTesto = document.createElement("td");
    nuovaCellaInput = document.createElement("td");
    nuovaCellaOrdina = document.createElement("td");
    searchBox = document.createElement("input");

    ricercaOrdina() {
      super.strutturaBarraFunzioni();
      this.allargaFinestraSelect();
      this.nuovaRiga1.append(this.nuovaCellaTesto);
      this.nuovaRiga1.append(this.nuovaCellaInput);
      this.nuovaCellaInput.append(this.searchBox);
      this.nuovaCellaInput.setAttribute("class", "tdGrey2");
      setMultipleAttribute(this.searchBox, { type: "search", name: "nomegruppo", size: 20, maxlength: 40 });
      this.nuovaCellaTesto.setAttribute("class", "tdGrey2");
      this.nuovaCellaTesto.textContent = "Cerca elemento:";
      this.nuovaRiga1.append(this.nuovaCellaOrdina);
      this.nuovaCellaOrdina.setAttribute("class", "FnButtons");
      this.nuovaCellaOrdina.textContent = "Ordina A-Z";
      new eventiBarraFunzioni(this.nuovaCellaInput).cercaElementiSelect();
      new eventiBarraFunzioni(this.nuovaCellaOrdina).ordinaElementiSelect();
    }

    selezionaTuttiFile() {
      super.strutturaBarraFunzioni();
      this.nuovaRiga1.append(this.nuovaCellaTesto);
      this.nuovaCellaTesto.setAttribute("class", "GreyMain");
      this.nuovaCellaTesto.textContent = "Seleziona tutti i file";
      new eventiBarraFunzioni(this.nuovaCellaTesto).selezionaTuttiFile();
    }

    allargaFinestraSelect() {
      const cellaElementiSelect = document.querySelector("td.tdMainbody"),
        listaElementiSelect = cellaElementiSelect.querySelector("select");
      cellaElementiSelect.setAttribute("height", 300);
      listaElementiSelect.setAttribute("size", 25);
      listaElementiSelect.style.height = "300px";
    }

    contentType() {
      super.strutturaBarraFunzioni();
      this.nuovaRiga1.append(this.nuovaCellaTesto);
      this.nuovaRiga1.append(this.nuovaCellaInput);
      this.nuovaCellaInput.append(this.searchBox);
      this.nuovaCellaInput.setAttribute("class", "tdGrey2");
      setMultipleAttribute(this.searchBox, { type: "search", name: "nomegruppo", size: 20, maxlength: 40 });
      this.nuovaCellaTesto.setAttribute("class", "tdGrey2");
      this.nuovaCellaTesto.textContent = "Cerca elemento:";
      new eventiBarraFunzioni(this.nuovaCellaInput).cercaElementiCT();
    }
  }

  function assetManagement() {
    const allargaDivAsset = document.querySelector("#div_list");
    allargaDivAsset.style.height = "500px";
  }

  cercaPaginaNQ.forEach((cercaElemento) => {
    if (cercaElemento.textContent.includes("File Manager")) {
      new elementiBarraFunzioni().selezionaTuttiFile();
    }
    if (cercaElemento.textContent.includes("Security Groups")) {
      //cercaOrdinaElementi();
      new elementiBarraFunzioni().ricercaOrdina();
    }
    if (cercaElemento.textContent.includes("Select Table")) {
      new elementiBarraFunzioni().ricercaOrdina();
    }
    if (cercaElemento.textContent.includes("Asset Management")) {
      assetManagement();
    }
    if (cercaElemento.textContent.includes("Content Type")) {
      new elementiBarraFunzioni().contentType();
    }
  });

  function setMultipleAttribute(elemento, attributo) {
    for (let chiave in attributo) {
      elemento.setAttribute(chiave, attributo[chiave]);
    }
  }
})();
