declare namespace campaign {
    /**
     * Removes custom variable data from the campaign's persistent storage.
     * 
     * @param name Name of the variable.
     */
    export function clearData(name: string): void;
    /**
     * Retrieves the value of the custom variable from the campaign's persistent storage.
     * 
     * @param name Optional name of the variable that you have passed to campaign.setData() method. Leave blank to retrieve all the data set by current campaign for the given visitor.
     */
    export function getData(name?: string): any;
    /**
     * Gets the content of all variants generated for the given visitor on the current page in JSON format.
     */
    export function getElements(): Object;
    /**
     * Gets information about the variants generated for the current campaign.
     */
    export function getExperience(): Object;
    /**
     * Gets the campaign name.
     */
    export function getName(): string;
    /**
     * Gets the recommended products that arrived with the campaign. Campaign type should be set to MaxRecommend.
     */
    export function getRecommendations(): Array <Object>;
    /**
     * Retrieves CSS text from campaign's HTML sources of the variants generated on the current page. 
     * 
     * @param idAttribute Optional ID attribute of the target CSS node	
     */
    export function getStyles(idAttribute?: string): Array <string>;
    /**
     * Identifies whether only default variants were generated on the page for the given campaign. 
     * 
     * In case this method is called when campaign has not been generated yet, it throws an exception. This was done to avoid confusion with the implicitly converted value campaign.isDefault() may return.
     */
    export function isDefault(): boolean;
    /**
     * Saves the value of the custom variable to the campaign's persistent storage, so it can be retrieved on other site pages using the campaign.getData() method.
     * The main difference between campaign.setData and visitor.setData is where the data is available. You can use campaign.setData to store campaign-specific information that will not be available for any other campaign. For instance, you may need to create only one campaign that runs if a certain banner was shown on a previous page. Whether or not the banner was shown to the user on a previous page can be stored with campaign.setData and then retrieved with campaign.getData within the scripts of the same campaign only.
     * 
     * @param name Name of the variable.
     * @param value Value of the variable
     * @param expires Optional. Variable's life time in days. The default value is '0' - this means 'session' 
     */
    export function setData(name: string, value, expires?: number): void;
    /**
     * Editable property to be used for data sharing between different scripts on a page.
     */
    export var scope: Object;
}

declare namespace site {
    export function getPageExperiences(): Object;
    export var scope: Object;
}

declare namespace dom {
    /**
     * Applies CSS rules to a page.
     */
    export function addCss(css: string): Node;
    export function addCss(css: string, alias: string): Node;
    /**
     * Assigns DOM event handler to the selected elements.
     */
    export function addListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes the z-index value of the target node to the highest value across all the DOM nodes on the page.
     */
    export function bringToFront(element: string): void;
    export function bringToFront(element: HTMLElement): void;
    export function bringToFront(element: Array < HTMLElement > ): void;
    export function bringToFront(element: string, zIndex: Number): void;
    export function bringToFront(element: HTMLElement, zIndex: Number): void;
    export function bringToFront(element: Array < HTMLElement > , zIndex: Number): void;
    /**
     * Updates an existing image or banner.
     */
    export function changeImageBanner(element: string, properties: Object): void;
    export function changeImageBanner(element: HTMLElement, properties: Object): void;
    export function changeImageBanner(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Sets the 'href' attribute value of the target node.
     */
    export function changeLinkUrl(element: string, value: string): void;
    export function changeLinkUrl(element: HTMLElement, value: string): void;
    export function changeLinkUrl(element: Array < HTMLElement > , value: string): void;
    /**
     * Updates the inline style of the target node.
     */
    export function changeStyle(element: string, cssRules: string): void;
    export function changeStyle(element: HTMLElement, cssRules: string): void;
    export function changeStyle(element: Array < HTMLElement > , cssRules: string): void;
    /**
     * Replaces the innerHTML value of the target node.
     */
    export function editHtml(element: string, html: string): void;
    export function editHtml(element: HTMLElement, html: string): void;
    export function editHtml(element: Array < HTMLElement > , html: string): void;
    /**
     * Reads the specified attribute values for the selected elements.
     */
    export function getNodesAttribute(selector: string, name: string): Promise<void>;
    /**
     * Changes the relative position of the target node.
     */
    export function freeMove(element: string, deltaX: Number, deltaY: Number): void;
    export function freeMove(element: HTMLElement, deltaX: Number, deltaY: Number): void;
    export function freeMove(element: Array < HTMLElement > , deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     */
    export function guidedMove(element: string, index: Number): void;
    export function guidedMove(element: HTMLElement, index: Number): void;
    export function guidedMove(element: Array < HTMLElement > , index: Number): void;
    /**
     * Hides the target node.
     */
    export function hide(element: string): void;
    export function hide(element: HTMLElement): void;
    export function hide(element: Array < HTMLElement > ): void;
    /**
     * Adds HTML content above the target node.
     */
    export function insertHtmlAbove(element: string, html: string): void;
    export function insertHtmlAbove(element: HTMLElement, html: string): void;
    export function insertHtmlAbove(element: Array < HTMLElement > , html: string): void;
    /**
     * Adds HTML content below the target node.
     */
    export function insertHtmlBelow(element: string, html: string): void;
    export function insertHtmlBelow(element: HTMLElement, html: string): void;
    export function insertHtmlBelow(element: Array < HTMLElement > , html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     */
    export function insertHtmlWithin(element: string, html: string): void;
    export function insertHtmlWithin(element: HTMLElement, html: string): void;
    export function insertHtmlWithin(element: Array < HTMLElement > , html: string): void;
    /**
     * Creates an image banner before the target node.
     */
    export function insertImageBannerAbove(element: string, properties: Object): void;
    export function insertImageBannerAbove(element: HTMLElement, properties: Object): void;
    export function insertImageBannerAbove(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Creates an image banner after the target node.
     */
    export function insertImageBannerBelow(element: string, properties: Object): void;
    export function insertImageBannerBelow(element: HTMLElement, properties: Object): void;
    export function insertImageBannerBelow(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Creates an image banner within the target node.
     */
    export function insertImageBannerWithin(element: string, properties: Object): void;
    export function insertImageBannerWithin(element: HTMLElement, properties: Object): void;
    export function insertImageBannerWithin(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Deletes the target node from the DOM.
     */
    export function remove(element: string): void;
    export function remove(element: HTMLElement): void;
    export function remove(element: Array < HTMLElement > ): void;
    /**
     * Removes the CSS that was previously added.
     */
    export function removeCss(alias: string): Node;
    /**
     * Removes the specified DOM event handler from the selected elements.
     */
    export function removeListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes height and width of the target node.
     */
    export function resize(element: string, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    export function resize(element: HTMLElement, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    export function resize(element: Array < HTMLElement > , width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Sets the specified attribute values for the selected elements.
     */
    export function setNodesAttribute(selector: String, name: String, value: String): void;
}