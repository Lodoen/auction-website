import { basePath } from "../constants/index.mjs";
import listeners from "../listeners/index.mjs";
import blueprints from "../blueprints/index.mjs";

/**
 * Renders the create auction form
 * @example
 * ```js
 * renderCreateAuction()
 * ```
 */
export default function renderCreateAuction() {
  const container = document.querySelector("main");
  if (container) {
    container.innerHTML = "";

    try {
      const h1 = document.createElement("h1");
      h1.setAttribute("class", "text-center text-sm-start pt-4 pb-3 ps-sm-2");
      h1.innerText = "Create a new auction";

      const titleInput = document.createElement("input");
      titleInput.setAttribute("type", "text");
      titleInput.setAttribute("class", "form-control");
      titleInput.setAttribute("id", "title");
      titleInput.setAttribute("name", "title");
      titleInput.setAttribute("maxlength", "280");
      titleInput.setAttribute("placeholder", "Auction title ...");
      titleInput.setAttribute("required", "true");
      titleInput.setAttribute(
        "title",
        "A valid title is required (must be under 280 characters long)"
      );

      const titleLabel = document.createElement("label");
      titleLabel.setAttribute("class", "form-label mb-0");
      titleLabel.setAttribute("for", "title");
      titleLabel.innerText = "Auction title:";

      const titleFeedback = document.createElement("p");
      titleFeedback.setAttribute(
        "class",
        "form-input-feedback m-0 text-danger fst-italic"
      );

      const titleGroup = document.createElement("div");
      titleGroup.setAttribute("class", "mb-3");
      titleGroup.append(titleLabel, titleInput, titleFeedback);

      const dateAndTime = JSON.stringify(new Date()).split("T");
      const today = dateAndTime[0].replaceAll(`"`, "");

      const dateInput = document.createElement("input");
      dateInput.setAttribute("type", "date");
      dateInput.setAttribute("class", "form-control");
      dateInput.setAttribute("id", "endsAt");
      dateInput.setAttribute("name", "endsAt");
      dateInput.setAttribute("value", today);
      dateInput.setAttribute("min", today);
      dateInput.setAttribute("required", "true");
      dateInput.setAttribute("title", "A valid date is required");

      const dateLabel = document.createElement("label");
      dateLabel.setAttribute("class", "form-label mb-0");
      dateLabel.setAttribute("for", "endsAt");
      dateLabel.innerText = "Ends at:";

      const dateFeedback = document.createElement("p");
      dateFeedback.setAttribute(
        "class",
        "form-input-feedback m-0 text-danger fst-italic"
      );

      const dateGroup = document.createElement("div");
      dateGroup.setAttribute("class", "mb-3");
      dateGroup.append(dateLabel, dateInput, dateFeedback);

      const descriptionInput = document.createElement("textarea");
      descriptionInput.setAttribute("class", "form-control");
      descriptionInput.setAttribute("id", "description");
      descriptionInput.setAttribute("name", "description");
      descriptionInput.setAttribute("placeholder", "Description ...");

      const descriptionLabel = document.createElement("label");
      descriptionLabel.setAttribute("class", "form-label mb-0");
      descriptionLabel.setAttribute("for", "title");
      descriptionLabel.innerText = "Description:";

      const descriptionGroup = document.createElement("div");
      descriptionGroup.setAttribute("class", "mb-3");
      descriptionGroup.append(descriptionLabel, descriptionInput);

      const firstRow = document.createElement("div");
      firstRow.setAttribute("class", "col-12 col-sm-6 order-sm-3");
      firstRow.append(titleGroup, dateGroup, descriptionGroup);

      const mediaLabel = document.createElement("label");
      mediaLabel.setAttribute("class", "form-label mb-0");
      mediaLabel.setAttribute("for", "media");
      mediaLabel.innerText = "Media* :";

      const mediaInput = document.createElement("input");
      mediaInput.setAttribute("type", "url");
      mediaInput.setAttribute(
        "class",
        "form-control rounded-0 rounded-start border-end-0"
      );
      mediaInput.setAttribute("id", "media");
      mediaInput.setAttribute("aria-describedby", "mediaHelp");
      mediaInput.setAttribute("placeholder", "Media ...");

      const mediaFeedback = document.createElement("p");
      mediaFeedback.setAttribute("class", "text-danger fst-italic m-0");
      mediaFeedback.innerText = "";

      const addMediaIcon = document.createElement("img");
      addMediaIcon.setAttribute("class", "w-100");
      addMediaIcon.setAttribute("alt", "Add media");
      addMediaIcon.src = `${basePath}/img/icons/add.png`;

      const addMediaIconWrapper = document.createElement("div");
      addMediaIconWrapper.setAttribute(
        "class",
        "icon-product d-flex align-items-center justify-content-center"
      );
      addMediaIconWrapper.append(addMediaIcon);

      const addMediaButton = document.createElement("button");
      addMediaButton.setAttribute(
        "class",
        "border btn btn-link rounded-0 rounded-end border-start-0 py-0 px-2"
      );
      addMediaButton.setAttribute("type", "button");
      addMediaButton.append(addMediaIconWrapper);

      const mediaWrapper = document.createElement("div");
      mediaWrapper.setAttribute("class", "d-flex border rounded");
      mediaWrapper.append(mediaInput, addMediaButton);

      const mediaUrls = new Set();
      addMediaButton.addEventListener("click", () => {
        if (mediaInput.checkValidity()) {
          mediaFeedback.innerText = "";
          mediaWrapper.classList.remove("border-danger");

          const mediaUrl = mediaInput.value.trim();
          if (mediaUrl && !mediaUrls.has(mediaUrl)) {
            mediaUrls.add(mediaUrl);
            mediaList.append(blueprints.mediaListElement(mediaUrl, mediaUrls));
          }
        } else {
          mediaFeedback.innerText = "Must be fully formed URL";
          mediaWrapper.classList.add("border-danger");
        }
      });

      const mediaHelp = document.createElement("div");
      mediaHelp.setAttribute("class", "form-text");
      mediaHelp.setAttribute("id", "mediaHelp");
      mediaHelp.innerText = "* Must be fully formed URL";

      const mediaListHeader = document.createElement("h2");
      mediaListHeader.innerText = "Media list";

      const mediaList = document.createElement("ol");

      const mediaListWrapper = document.createElement("div");
      mediaListWrapper.setAttribute("class", "mt-4 mt-sm-3 mb-3");
      mediaListWrapper.append(mediaListHeader, mediaList);

      const secondRow = document.createElement("section");
      secondRow.setAttribute("class", "mb-3 col-12 col-sm-5 order-sm-1");
      secondRow.append(
        mediaLabel,
        mediaWrapper,
        mediaFeedback,
        mediaHelp,
        mediaListWrapper
      );

      const borderStart = document.createElement("div");
      borderStart.setAttribute("class", "border-start");
      const borderStartWrapper = document.createElement("div");
      borderStartWrapper.setAttribute(
        "class",
        "d-none d-sm-flex justify-content-center col-sm-1 order-sm-2"
      );
      borderStartWrapper.append(borderStart);

      const submitButton = document.createElement("button");
      submitButton.setAttribute("type", "submit");
      submitButton.setAttribute(
        "class",
        "btn btn-secondary hover-secondary rounded-pill col-12 col-sm-3"
      );
      submitButton.innerText = "Create listing";

      const submitButtonWrapper = document.createElement("div");
      submitButtonWrapper.setAttribute(
        "class",
        "mb-5 d-flex justify-content-end col-12 order-sm-3"
      );
      submitButtonWrapper.append(submitButton);

      const formContent = document.createElement("div");
      formContent.setAttribute("class", "row");
      formContent.append(
        firstRow,
        secondRow,
        borderStartWrapper,
        submitButtonWrapper
      );

      const form = document.createElement("form");
      form.setAttribute("class", "container-fluid");
      form.append(formContent);
      form.addEventListener("submit", (event) =>
        listeners.createAuction(event, mediaUrls)
      );
      listeners.validateFormInputs(form);

      const formFeedback = document.createElement("div");
      formFeedback.setAttribute("id", "form-feedback");

      container.append(h1, form, formFeedback);
    } catch (error) {
      container.innerHTML = "";
      if (error.isCustomError) {
        container.append(blueprints.feedback(error.message, "warning"));
      } else {
        container.append(
          blueprints.feedback(
            "Something went wrong when handling the create auction form",
            "warning"
          )
        );
      }
    }
  }
}
