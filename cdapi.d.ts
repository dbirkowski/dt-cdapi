declare module 'campaign' {
    export = campaign;
}

declare namespace campaign {
    /**
     * Removes custom variable data from the campaign's persistent storage.
     * 
     * @param name Name of the variable.
     */
    function clearData(name: string): void;
    /**
     * Retrieves the value of the custom variable from the campaign's persistent storage.
     * 
     * @param name Optional name of the variable that you have passed to campaign.setData() method. Leave blank to retrieve all the data set by current campaign for the given visitor.
     */
    function getData(name?: string): any;
    /**
     * Gets the content of all variants generated for the given visitor on the current page in JSON format.
     */
    function getElements(): Object;
    /**
     * Gets information about the variants generated for the current campaign.
     */
    function getExperience(): Object;
    /**
     * Gets the campaign name.
     */
    function getName(): string;
    /**
     * Gets the recommended products that arrived with the campaign. Campaign type should be set to MaxRecommend.
     */
    function getRecommendations(): Array <Object>;
    /**
     * Retrieves CSS text from campaign's HTML sources of the variants generated on the current page. 
     * 
     * @param idAttribute Optional ID attribute of the target CSS node	
     */
    function getStyles(idAttribute?: string): Array <string>;
    /**
     * Identifies whether only default variants were generated on the page for the given campaign. 
     * 
     * In case this method is called when campaign has not been generated yet, it throws an exception. This was done to avoid confusion with the implicitly converted value campaign.isDefault() may return.
     */
    function isDefault(): boolean;
    /**
     * Saves the value of the custom variable to the campaign's persistent storage, so it can be retrieved on other site pages using the campaign.getData() method.
     * The main difference between campaign.setData and visitor.setData is where the data is available. You can use campaign.setData to store campaign-specific information that will not be available for any other campaign. For instance, you may need to create only one campaign that runs if a certain banner was shown on a previous page. Whether or not the banner was shown to the user on a previous page can be stored with campaign.setData and then retrieved with campaign.getData within the scripts of the same campaign only.
     * 
     * @param name Name of the variable.
     * @param value Value of the variable
     * @param expires Optional. Variable's life time in days. The default value is '0' - this means 'session' 
     */
    function setData(name: string, value, expires?: number): void;
    /**
     * Editable property to be used for data sharing between different scripts on a page.
     */
    var scope: Object;
}

declare namespace site {
    function getPageExperiences(): Object;
    var scope: Object;
}

declare namespace dom {
    /**
     * Applies CSS rules to a page.
     */
    function addCss(css: string): Node;
    function addCss(css: string, alias: string): Node;
    /**
     * Assigns DOM event handler to the selected elements.
     */
    function addListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes the z-index value of the target node to the highest value across all the DOM nodes on the page.
     */
    function bringToFront(element: string): void;
    function bringToFront(element: HTMLElement): void;
    function bringToFront(element: Array < HTMLElement > ): void;
    function bringToFront(element: string, zIndex: Number): void;
    function bringToFront(element: HTMLElement, zIndex: Number): void;
    function bringToFront(element: Array < HTMLElement > , zIndex: Number): void;
    /**
     * Updates an existing image or banner.
     */
    function changeImageBanner(element: string, properties: Object): void;
    function changeImageBanner(element: HTMLElement, properties: Object): void;
    function changeImageBanner(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Sets the 'href' attribute value of the target node.
     */
    function changeLinkUrl(element: string, value: string): void;
    function changeLinkUrl(element: HTMLElement, value: string): void;
    function changeLinkUrl(element: Array < HTMLElement > , value: string): void;
    /**
     * Updates the inline style of the target node.
     */
    function changeStyle(element: string, cssRules: string): void;
    function changeStyle(element: HTMLElement, cssRules: string): void;
    function changeStyle(element: Array < HTMLElement > , cssRules: string): void;
    /**
     * Replaces the innerHTML value of the target node.
     */
    function editHtml(element: string, html: string): void;
    function editHtml(element: HTMLElement, html: string): void;
    function editHtml(element: Array < HTMLElement > , html: string): void;
    /**
     * Reads the specified attribute values for the selected elements.
     */
    function getNodesAttribute(selector: string, name: string): Promise<void>;
    /**
     * Changes the relative position of the target node.
     */
    function freeMove(element: string, deltaX: Number, deltaY: Number): void;
    function freeMove(element: HTMLElement, deltaX: Number, deltaY: Number): void;
    function freeMove(element: Array < HTMLElement > , deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     */
    function guidedMove(element: string, index: Number): void;
    function guidedMove(element: HTMLElement, index: Number): void;
    function guidedMove(element: Array < HTMLElement > , index: Number): void;
    /**
     * Hides the target node.
     */
    function hide(element: string): void;
    function hide(element: HTMLElement): void;
    function hide(element: Array < HTMLElement > ): void;
    /**
     * Adds HTML content above the target node.
     */
    function insertHtmlAbove(element: string, html: string): void;
    function insertHtmlAbove(element: HTMLElement, html: string): void;
    function insertHtmlAbove(element: Array < HTMLElement > , html: string): void;
    /**
     * Adds HTML content below the target node.
     */
    function insertHtmlBelow(element: string, html: string): void;
    function insertHtmlBelow(element: HTMLElement, html: string): void;
    function insertHtmlBelow(element: Array < HTMLElement > , html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     */
    function insertHtmlWithin(element: string, html: string): void;
    function insertHtmlWithin(element: HTMLElement, html: string): void;
    function insertHtmlWithin(element: Array < HTMLElement > , html: string): void;
    /**
     * Creates an image banner before the target node.
     */
    function insertImageBannerAbove(element: string, properties: Object): void;
    function insertImageBannerAbove(element: HTMLElement, properties: Object): void;
    function insertImageBannerAbove(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Creates an image banner after the target node.
     */
    function insertImageBannerBelow(element: string, properties: Object): void;
    function insertImageBannerBelow(element: HTMLElement, properties: Object): void;
    function insertImageBannerBelow(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Creates an image banner within the target node.
     */
    function insertImageBannerWithin(element: string, properties: Object): void;
    function insertImageBannerWithin(element: HTMLElement, properties: Object): void;
    function insertImageBannerWithin(element: Array < HTMLElement > , properties: Object): void;
    /**
     * Deletes the target node from the DOM.
     */
    function remove(element: string): void;
    function remove(element: HTMLElement): void;
    function remove(element: Array < HTMLElement > ): void;
    /**
     * Removes the CSS that was previously added.
     */
    function removeCss(alias: string): Node;
    /**
     * Removes the specified DOM event handler from the selected elements.
     */
    function removeListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes height and width of the target node.
     */
    function resize(element: string, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    function resize(element: HTMLElement, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    function resize(element: Array < HTMLElement > , width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Sets the specified attribute values for the selected elements.
     */
    function setNodesAttribute(selector: String, name: String, value: String): void;
}