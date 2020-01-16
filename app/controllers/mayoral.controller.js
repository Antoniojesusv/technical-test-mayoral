const mayoralModule = (function(window) {
  const view = window;
  const instance = null;

  const mayoralController = function() {
    this.gui = this.loadGuiElements();
    this.oninit();
  };

  mayoralController.prototype = Object.create(
    {},
    {
      oninit: {
        value: function() {
          this.loadEventListeners();
        }
      },

      loadEventListeners: {
        value: function() {
          const { inputSearch, pagesLinks } = this.gui;
          inputSearch.addEventListener(
            "keyup",
            this.searchProductHandler.bind(this),
            false
          );

          Array.from(pagesLinks).forEach(
            function(page) {
              page.addEventListener(
                "click",
                this.pagesLinkHandler.bind(this),
                false
              );
            }.bind(this)
          );
        }
      },

      loadGuiElements: {
        value: function() {
          return {
            inputSearch: view.document.getElementById("searchInputId"),
            buttonSearch: view.document.getElementById("searchButtonId"),
            productsName: view.document.querySelectorAll(".product-name"),
            pagesLinks: view.document.querySelectorAll(".pagesLink"),
            boysProducts: view.document.querySelectorAll(".boys"),
            girlsProducts: view.document.querySelectorAll(".girls")
          };
        }
      },

      pagesLinkHandler: {
        value: function(e) {
          const { boysProducts, girlsProducts } = this.gui;
          const value = e.target.innerHTML.replace(/\s/g, "");

          if (value === "Girls") {
            this.dislplayBlock(girlsProducts, boysProducts);
          } else {
            this.dislplayBlock(boysProducts, girlsProducts);
          }
        }
      },

      dislplayBlock: {
        value: function(toSetBlock, toSetNone) {
          Array.from(toSetBlock).forEach((element, index) => {
            element.style.display = "flex";
            toSetNone[index].style.display = "none";
          });
        }
      },

      searchProductHandler: {
        value: function() {
          const { inputSearch, productsName } = this.gui;
          const inputValue = inputSearch.value;

          Array.from(productsName).forEach(nameDiv => {
            name = nameDiv.innerHTML.replace(/\s/g, "");
            const card = this.getCardContainer(nameDiv);

            if (this.isEqual(inputValue, name) > -1) {
              card.style.display = "flex";
            } else {
              card.style.display = "none";
            }
          });
        }
      },

      isEqual: {
        value: function(inputValue, name) {
          return name.toUpperCase().indexOf(inputValue.toUpperCase());
        }
      },

      getCardContainer: {
        value: function(nameDiv) {
          return nameDiv.parentNode.parentNode;
        }
      }
    }
  );

  const init = function() {
    if (!instance) {
      return new mayoralController();
    }

    return instance;
  };

  return {
    init
  };
})(window);
