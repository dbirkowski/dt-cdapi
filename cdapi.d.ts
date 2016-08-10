declare namespace campaign {
    /**
     * Removes custom variable data from the campaign's persistent storage.
     * 
     * @param name Name of the variable.
     */
    export function clearData(name: string): void;
    /**
     * Retrieves the value of the custom variable from the campaign's persistent storage.
     */
    export function getData(name?: string): any;
    /**
     * Gets the content of all variants generated for the given visitor on the current page in JSON format.
     */
    export function getElements(): Object;
    export function getExperience(): Object;
    export function getName(): string;
    export function getRecommendations(): Array < Object > ;
    export function getStyles(idAttribute?: string): Array <string>;
    export function isDefault(): boolean;
    export function setData(name: string, value): void;
    export function setData(name: string, value, expires: number): void;
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
    export function getNodesAttribute(selector: string, name: string): Promise < void > ;
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