(function () {
  const cercaPaginaNQ = document.querySelectorAll("table.tbMain");

  cercaPaginaNQ.forEach((cercaElemento) => {
    if (cercaElemento.textContent.includes("File Manager")) {
      fileManager();
    }
    if (cercaElemento.textContent.includes("Security Groups")) {
      cercaOrdinaElementi();
    }
    if (cercaElemento.textContent.includes("Select Table")) {
      cercaOrdinaElementi();
    }
    if (cercaElemento.textContent.includes("Asset Management")) {
      assetManagement();
    }
  });

  function fileManager() {
    const rigaFunzione = document.querySelectorAll("td.tdTopGrey table tbody tr"),
      nuovaCella = document.createElement("td"),
      nuovaTabella = document.createElement("table"),
      nuovoTbody = document.createElement("tbody"),
      nuovaRiga = document.createElement("tr"),
      nuovaCellaTesto = document.createElement("td");

    setMultipleAttribute(nuovaTabella, {
      class: "FnButtons",
      cellspacing: "0",
      cellpadding: "1",
      onmouseover: "buttonover(this);",
      onmouseout: "buttonout(this);",
    });
    nuovaTabella.style.border = "1px solid rgb(238, 238, 238)";
    nuovaTabella.style.cursor = "pointer";
    nuovaCellaTesto.setAttribute("class", "GreyMain");
    nuovaCellaTesto.textContent = "Seleziona tutti i file";

    rigaFunzione[4].append(nuovaCella);
    nuovaCella.append(nuovaTabella);
    nuovaTabella.append(nuovoTbody);
    nuovoTbody.append(nuovaRiga);
    nuovaRiga.append(nuovaCellaTesto);

    nuovaCellaTesto.addEventListener("click", () => {
      const tabellaFileManager = document.querySelectorAll("table.lightmain"),
        tabellaCheckBox = tabellaFileManager[1].querySelectorAll('[type="checkbox"]');
      for (let i = 0; i < tabellaCheckBox.length; i++) {
        tabellaCheckBox[i].checked = true;
      }
    });
  }

  function cercaOrdinaElementi() {
    const cellaElementiSelect = document.querySelector("td.tdMainbody"),
      listaElementiSelect = cellaElementiSelect.querySelector("select"),
      elementiSelect = cellaElementiSelect.querySelectorAll("option"),
      selezionaPrimaRiga = cercaPaginaNQ[0].querySelector("tbody tr"),
      nuovaCella = document.createElement("td"),
      nuovaCellaTesto = document.createElement("td"),
      nuovaCellaInput = document.createElement("td"),
      nuovaCellaOrdina = document.createElement("td"),
      nuovaTabella = document.createElement("table"),
      nuovoTbody = document.createElement("tbody"),
      nuovaRiga = document.createElement("tr"),
      nuovaRiga1 = document.createElement("tr"),
      searchBox = document.createElement("input");

    cellaElementiSelect.setAttribute("height", 300);
    listaElementiSelect.setAttribute("size", 25);
    listaElementiSelect.style.height = "300px";

    selezionaPrimaRiga.after(nuovaRiga);
    nuovaRiga.append(nuovaCella);
    nuovaCella.append(nuovaTabella);
    nuovaTabella.append(nuovoTbody);
    nuovoTbody.append(nuovaRiga1);
    nuovaRiga1.append(nuovaCellaTesto);
    nuovaRiga1.append(nuovaCellaInput);
    nuovaCellaInput.append(searchBox);
    nuovaRiga1.append(nuovaCellaOrdina);

    setMultipleAttribute(nuovaTabella, { cellspacing: "0", cellpadding: "1", border: "0" });
    nuovaCellaTesto.setAttribute("class", "tdGrey2");
    nuovaCellaTesto.textContent = "Cerca elemento:";
    nuovaCellaInput.setAttribute("class", "tdGrey2");
    setMultipleAttribute(searchBox, { type: "search", name: "nomegruppo", size: 20, maxlength: 40 });
    nuovaCellaOrdina.setAttribute("class", "FnButtons");
    nuovaCellaOrdina.textContent = "Ordina A-Z";

    searchBox.addEventListener("keyup", (e) => {
      let testoRicerca = e.target.value,
        testoRicercaLower = testoRicerca.toLowerCase();
      for (let i = 0; i < elementiSelect.length; i++) {
        let testoOpzione = elementiSelect[i].textContent || elementiSelect[i].innerText,
          testoOpzioneLower = testoOpzione.toLowerCase();
        if (testoOpzioneLower.indexOf(testoRicercaLower) > -1) {
          elementiSelect[i].style.display = "";
        } else {
          elementiSelect[i].style.display = "none";
        }
      }
    });

    nuovaCellaOrdina.addEventListener("click", () => {
      let tmpAry = new Array();
      for (let i = 0; i < listaElementiSelect.options.length; i++) {
        tmpAry[i] = new Array();
        tmpAry[i][0] = listaElementiSelect.options[i].text;
        tmpAry[i][1] = listaElementiSelect.options[i].value;
      }
      tmpAry.sort();
      while (listaElementiSelect.options.length > 0) {
        listaElementiSelect.options[0] = null;
      }
      for (let i = 0; i < tmpAry.length; i++) {
        let op = new Option(tmpAry[i][0], tmpAry[i][1]);
        listaElementiSelect.options[i] = op;
      }
    });
  }

  function setMultipleAttribute(elemento, attributo) {
    for (let chiave in attributo) {
      elemento.setAttribute(chiave, attributo[chiave]);
    }
  }

  function assetManagement() {
    const allargaDivAsset = document.querySelector("#div_list");

    allargaDivAsset.style.height = "500px";
  }
})();
