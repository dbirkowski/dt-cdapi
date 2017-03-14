interface Promise {}
interface Deferred {}
interface Renderer {}
interface Recommendations {}
interface Modules {}

/**
 * Provides a way to execute callback functions based on one or more Deferred objects or functions that represent asynchronous event(s). Returns a master-Promise object which lets you assign callbacks to its state change.
 * 
 * @param condition 	A function that triggers done callbacks (resolves virtual Deferred object) when a non-false value is returned. The value is checked every 50ms.
 * @param stopCondition 	(Optional) Additional function that stops continuous checks when a non-false value is returned.
 */
declare function when( condition: Function, stopCondition?: Function ): Promise;
/**
 * Provides a way to execute callback functions based on one or more Deferred objects or functions that represent asynchronous event(s). Returns a master-Promise object which lets you assign callbacks to its state change.
 * 
 * @param Deferred 	Deferred object to be used as Deferred reference for the resulting master-Promise.
 * @param Deferreds 	(Optional) Additional reference Deferred objects for master-Promise.
 */
declare function when( Deferred: Deferred, Deferreds?: Deferred ): Promise;

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
    function getRecommendations(): Array < Object > ;
    /**
     * Retrieves CSS text from campaign's HTML sources of the variants generated on the current page. 
     * 
     * @param idAttribute Optional ID attribute of the target CSS node	
     */
    function getStyles(idAttribute?: string): Array < string > ;
    /**
     * Identifies whether only default variants were generated on the page for the given campaign. 
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
    /**
     * Gets information about the variants generated for all campaigns on the current page.
     */
    function getPageExperiences(): Object;
    /**
     * Editable site-wide namespace for reusable parameters, so that they are available for use in different scripts on a page.
     */
    var scope: Object;
}

declare namespace dom {
    /**
     * Applies CSS rules to a page.
     * 
     * @param css CSS rule(s) to be applied immediately.
     * @param alias Optional custom identifier for the CSS rule(s) that have been applied (you can deactivate this later as required). This parameter is useful when you want to apply CSS rules for a limited period of time.
     */
    function addCss(css: string, alias?: string): Node;
    /**
     * Assigns DOM event handler to the selected elements.
     * 
     * @param selector Target DOM node(s) described by a CSS selector.
     * @param eventName Target event name to listen for.
     * @param handler Reference to the event handler.
     */
    function addListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes the z-index value of the target node to the highest value across all the DOM nodes on the page.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param zIndex Optional z-index value. By default, the value is the 'maximum z-index value on the page +10'.
     */
    function bringToFront(element: string, zIndex?: Number): void;
    /**
     * Changes the z-index value of the target node to the highest value across all the DOM nodes on the page.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param zIndex Optional z-index value. By default, the value is the 'maximum z-index value on the page +10'.
     */
    function bringToFront(element: HTMLElement, zIndex?: Number): void;
    /**
     * Changes the z-index value of the target node to the highest value across all the DOM nodes on the page.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param zIndex Optional z-index value. By default, the value is the 'maximum z-index value on the page +10'.
     */
    function bringToFront(element: Array <HTMLElement> , zIndex?: Number): void;
    /**
     * Updates an existing image or banner.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     * - linkUrl ← String'href' value; if omitted image is not wrapped with <a> tag.
     * - imageUrl ← StringImage 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageAlt ← StringImage 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageTitle ← StringImage 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function changeImageBanner(element: string, properties: Object): void;
    /**
     * Updates an existing image or banner.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     * - linkUrl ← String'href' value; if omitted image is not wrapped with <a> tag.
     * - imageUrl ← StringImage 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageAlt ← StringImage 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageTitle ← StringImage 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function changeImageBanner(element: HTMLElement, properties: Object): void;
    /**
     * Updates an existing image or banner.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     * - linkUrl ← String'href' value; if omitted image is not wrapped with <a> tag.
     * - imageUrl ← StringImage 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageAlt ← StringImage 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * - imageTitle ← StringImage 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function changeImageBanner(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Sets the 'href' attribute value of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param value New 'href' attribute value.
     */
    function changeLinkUrl(element: string, value: string): void;
    /**
     * Sets the 'href' attribute value of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param value New 'href' attribute value.
     */
    function changeLinkUrl(element: HTMLElement, value: string): void;
    /**
     * Sets the 'href' attribute value of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param value New 'href' attribute value.
     */
    function changeLinkUrl(element: Array <HTMLElement> , value: string): void;
    /**
     * Updates the inline style of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param cssRules New CSS rules for the target node.
     */
    function changeStyle(element: string, cssRules: string): void;
    /**
     * Updates the inline style of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param cssRules New CSS rules for the target node.
     */
    function changeStyle(element: HTMLElement, cssRules: string): void;
    /**
     * Updates the inline style of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param cssRules New CSS rules for the target node.
     */
    function changeStyle(element: Array <HTMLElement> , cssRules: string): void;
    /**
     * Replaces the innerHTML value of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html New innerHTML value.
     */
    function editHtml(element: string, html: string): void;
    /**
     * Replaces the innerHTML value of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html New innerHTML value.
     */
    function editHtml(element: HTMLElement, html: string): void;
    /**
     * Replaces the innerHTML value of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html New innerHTML value.
     */
    function editHtml(element: Array <HTMLElement> , html: string): void;
    /**
     * Reads the specified attribute values for the selected elements.
     * 
     * @param selector Target DOM node(s) described by a CSS selector.
     * @param name Target attribute name.
     */
    function getNodesAttribute(selector: string, name: string): Promise;
    /**
     * Changes the relative position of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function freeMove(element: string, deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative position of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function freeMove(element: HTMLElement, deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative position of the target node.
     * 
     * This method iteratively waits (with a 50 ms interval) for the target nodes to appear, so that the change can be applied even if content arrives asynchronously.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function freeMove(element: Array <HTMLElement> , deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param index New position of the target node compared to its siblings. Index starts from 0.
     */
    function guidedMove(element: string, index: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param index New position of the target node compared to its siblings. Index starts from 0.
     */
    function guidedMove(element: HTMLElement, index: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param index New position of the target node compared to its siblings. Index starts from 0.
     */
    function guidedMove(element: Array <HTMLElement> , index: Number): void;
    /**
     * Hides the target node.
     * 
     * @param element Element(s) or CSS path to be hidden via added 'visibility: hidden' style
     */
    function hide(element: string): void;
    /**
     * Hides the target node.
     * 
     * @param element Element(s) or CSS path to be hidden via added 'visibility: hidden' style
     */
    function hide(element: HTMLElement): void;
    /**
     * Hides the target node.
     * 
     * @param element Element(s) or CSS path to be hidden via added 'visibility: hidden' style
     */
    function hide(element: Array <HTMLElement> ): void;
    /**
     * Adds HTML content above the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlAbove(element: string, html: string): void;
    /**
     * Adds HTML content above the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlAbove(element: HTMLElement, html: string): void;
    /**
     * Adds HTML content above the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlAbove(element: Array <HTMLElement> , html: string): void;
    /**
     * Adds HTML content below the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlBelow(element: string, html: string): void;
    /**
     * Adds HTML content below the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlBelow(element: HTMLElement, html: string): void;
    /**
     * Adds HTML content below the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlBelow(element: Array <HTMLElement> , html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlWithin(element: string, html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlWithin(element: HTMLElement, html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlWithin(element: Array <HTMLElement> , html: string): void;
    /**
     * Creates an image banner before the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerAbove(element: string, properties: Object): void;
    /**
     * Creates an image banner before the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerAbove(element: HTMLElement, properties: Object): void;
    /**
     * Creates an image banner before the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerAbove(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Creates an image banner after the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerBelow(element: string, properties: Object): void;
    /**
     * Creates an image banner after the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerBelow(element: HTMLElement, properties: Object): void;
    /**
     * Creates an image banner after the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerBelow(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Creates an image banner within the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerWithin(element: string, properties: Object): void;
    /**
     * Creates an image banner within the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerWithin(element: HTMLElement, properties: Object): void;
    /**
     * Creates an image banner within the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     *     - linkUrl ← String: 'href' value; if the omitted image is not wrapped with the <a> tag.
     *     - imageUrl ← String: Image 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageAlt ← String: Image 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     *     - imageTitle ← String: Image 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function insertImageBannerWithin(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Deletes the target node from the DOM.
     * 
     * @param element Element(s) or CSS path that describes a set of elements to be deleted from DOM.
     */
    function remove(element: string): void;
    /**
     * Deletes the target node from the DOM.
     * 
     * @param element Element(s) or CSS path that describes a set of elements to be deleted from DOM.
     */
    function remove(element: HTMLElement): void;
    /**
     * Deletes the target node from the DOM.
     * 
     * @param element Element(s) or CSS path that describes a set of elements to be deleted from DOM.
     */
    function remove(element: Array <HTMLElement> ): void;
    /**
     * Removes the CSS that was previously added.
     * 
     * @param alias A custom identifier of the CSS node created by dom.addCss()
     */
    function removeCss(alias: string): Node;
    /**
     * Removes the specified DOM event handler from the selected elements.
     * 
     * @param selector Target DOM node(s) described by a CSS selector.
     * @param eventName Target event name to remove the handler from.
     * @param handler Reference to the event handler.
     */
    function removeListener(selector: string, eventName: string, handler: Function): void;
    /**
     * Changes height and width of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param width New width of the target node in pixels.
     * @param height New height of the target node in pixels.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function resize(element: string, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Changes height and width of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param width New width of the target node in pixels.
     * @param height New height of the target node in pixels.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function resize(element: HTMLElement, width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Changes height and width of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param width New width of the target node in pixels.
     * @param height New height of the target node in pixels.
     * @param deltaX X-axis shift in pixels (positive or negative).
     * @param deltaY Y-axis shift in pixels (positive or negative).
     */
    function resize(element: Array <HTMLElement> , width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Sets the specified attribute values for the selected elements.
     * 
     * @param selector Target DOM node(s) described by a CSS selector.
     * @param name Target attribute name.
     * @param value Target attribute value.
     */
    function setNodesAttribute(selector: String, name: String, value: String): void;
}

declare namespace renderer {
    /**
     * Makes a request to the Content Generator to get campaign content.
     * 
     * @param virtualUrl Optional URL value to be passed to the Content Generator. You cannot pass the same URL as the URL of the original page - this is to prevent looping. Leave blank to pass the default value: <campaign name>
     */
    function getContent(virtualUrl?: string): Deferred;
    /**
     * Hides the test areas for replacement with alternative content.
     * 
     * @param cssSelector A CSS 'path' to the test areas. Used exclusively for hiding content. May either be a selector itself or contain CSS properties if default hiding properties do not work for you (default value is { position: relative; left: -10000px; top: -10000px }). A different logic is used for replacing content.
     * @param alias Optional custom identifier of applied CSS rules to deactivate them later if needed. Leave blank in case you'll use only renderer.showAll() method.
     */
    function hide(cssSelector: string, alias?: string): Renderer;
    /**
     * Applies an element to the page immediately.
     * 
     * @param element Optional element name or element data object to be rendered. If this parameter is not set, all campaign variant scripts are executed.
     */
    function runVariantJs(element?: string ): Renderer;
    /**
     * Shows content using the given alias identifier.
     * 
     * @param alias 	Custom identifier specified in the hide() method call.
     */
    function show(alias: string): Renderer;
    /**
     * Shows all previously hidden content for the current campaign.
     */
    function showAll(): Renderer;
    /**
     * Automatically displays content after a specified time has elapsed.
     * 
     * @param timeout Timeout value in milliseconds after which content will be automatically displayed. This method is automatically called inside any campaign with a pre-set value of "7000" (means "7 seconds"). If you want to disable the unhideAfter feature, pass "never" value as its argument.
     */
    function unhideAfter(timeout: number): Renderer;
    /**
     * Executes the when() method before DOM is ready.
     * 
     * @param successCondition 	A function that serves as an iterative condition. If successCondition() returns false, nothing happens and iterative checks will be continued. If it returns a non-false value, all done and always callbacks are triggered.
     */
    function waitUntilDom(successCondition: Function): Deferred;
    /**
     * Checks if the specified element exists on the page and executes success and always callbacks.
     * 
     * @param cssSelector 	A CSS selector that describes an area on the page. If document.querySelectorAll(cssSelector) returns 0 results, nothing happens and iterative checks continue. If the method returns at least 1 node, all done and always callbacks are triggered.
     */
    function waitForElement(selector: string): Deferred;
    /**
    * Provides a way to execute callback functions based on one or more Deferred objects or functions that represent asynchronous event(s). Returns a master-Promise object which lets you assign callbacks to its state change.
    * 
    * @param condition 	A function that triggers done callbacks (resolves virtual Deferred object) when a non-false value is returned. The value is checked every 50ms.
    * @param stopCondition 	(Optional) Additional function that stops continuous checks when a non-false value is returned.
    */
    function when( condition: Function, stopCondition?: Function ): Promise;
    /**
    * Provides a way to execute callback functions based on one or more Deferred objects or functions that represent asynchronous event(s). Returns a master-Promise object which lets you assign callbacks to its state change.
    * 
    * @param Deferred 	Deferred object to be used as Deferred reference for the resulting master-Promise.
    * @param Deferreds 	(Optional) Additional reference Deferred objects for master-Promise.
    */
    function when( Deferred: Deferred, Deferreds?: Deferred ): Promise;
}
declare namespace actions {
    /**
     * Captures action data to be sent to the Content Generator in subsequent requests.
     * 
     * @param name 	Action name as configured in the Maxymiser UI
     * @param value 	Optional integer value of the action. Is set to 1 by default (e.g. one click, one form submission). For advanced action tracking, you can specify values such as basket value, registration period, etc.
     * @param attribute 	Optional string to filter action reports by value (for example, currency, the part of the page that the user clicked, is logged in, etc)
     */
    function postpone(name: string, value?: number, attribute?: string);
    /**
     * Sends all captured action data to the Content Generator.
     * 
     * @param name Optional action name as configured in the Maxymiser UI
     * @param value 	Optional integer value of the action. Is set to 1 by default (e.g. one click, one form submission). For advanced action tracking, you can specify values such as basket value, registration period, etc.
     * @param attribute 	Optional string to filter action reports by value (for example, currency, the part of the page that the user clicked, is logged in, etc)
     */
    function send(name?: string, value?: number, attribute?: string);
    /**
     * Captures action data to be sent to the Content Generator when actions.send() is called.
     * 
     * @param name 	Action name as configured in the Maxymiser UI
     * @param value 	Optional integer value of the action. Is set to 1 by default (e.g. one click, one form submission). For advanced action tracking, you can specify values such as basket value, registration period, etc.
     * @param attribute 	Optional string to filter action reports by value (for example, currency, the part of the page that the user clicked, is logged in, etc)
     */
    function set(name: string, value?: number, attribute?: string);
    /**
     * Assigns an On-Click action tracking handler to a DOM node.
     * 
     * @param selector 	Target DOM node(s) described by a CSS selector or a reference to the HTML element
     * @param parameters 	Action properties:
     *     - name ← String: Action name
     *     - value ← Number: Optional value of the action. If you don't pass a value, the value defaults to `1`.
     *     - attribute ← String: Optional attribute of the action.
     * @param guid 	Unique ID of an action used in VCB, so that editing an action name or  value in VCB changes only that instance of the action.
     */
    function trackClicks(selector: string | HTMLElement, parameters: Object, guid: string);
}
declare namespace visitor {
    /**
     * Removes custom variable data from persistent storage.
     * 
     * @param name 	Name of the variable
     */
    function clearData(name: string);
    /**
     * Retrieves the value of the custom attribute that was saved using visitor.storeAttr().
     * 
     * @param name 	Name of the custom attribute configured in the Maxymiser UI
     */
    function getAttr(name: string);
    /**
     * Retrieves the custom variable value from persistent storage.
     * 
     * @param name 	Optional name of the variable that you have passed to visitor.setData() method. Leave blank to retrieve all the data set for the current visitor.
     */
    function getData(name?: string);
    /**
     * Returns attributes that are enabled for use in the browser.
     */
    function getServerAttrs();
    /**
     * Redirects the visitor to the specified URL.
     * 
     * @param targetUrl 	The URL the visitor will be immediately redirected to.
     */
    function navigateTo(targetUrl: string);
    /**
     * Removes the value of a custom attribute from persistent storage.
     * 
     * @param name 	Name of the custom attribute
     */
    function removeAttr(name: string);
    /**
     * Removes the value of the external visitor ID from persistent storage.
     * 
     * @param key 	External ID key bound to a specific data table. The value can be an integer from 1 to 5.
     */
    function removeId(key: number);
    /**
     * Sends additional request to Maxymiser Content Generator.
     * 
     * @param virtualUrl 	URL value to be passed to the Content Generator. To prevent looping, you cannot pass the same URL as the URL of the original page. Please note that in case an empty string is passed, the original page URL is used for page determination.
     */
    function requestPage(virtualUrl: string);
    /**
     * Captures custom attribute data to temporary storage to be sent to the Content Generator in subsequent page requests.
     * 
     * @param name 	Custom attribute name that corresponds to the configuration in the Maxymiser UI
     * @param value 	Custom attribute value
     */
    function setAttr(name: string, value: string);
    /**
     * Saves the custom variable value in persistent storage, so it can be retrieved on other site pages using visitor.getData().
     * 
     * @param name 	Variable name
     * @param value 	Variable value
     * @param expires 	Optional life time of variable (in days). "0" by default, meaning "session" 
     */
    function setData(name: string, value: string, expires?: number);
    /**
     * Captures the external visitor ID to temporary storage to be sent to the Content Generator.
     * 
     * @param key 	External ID key bound to a specific data table. The value can be an integer from 1 to 5.
     * @param value 	External ID value that corresponds to the first column of the table.
     */
    function setId(key: number, value: string);
    /**
     * Saves custom attribute data to permanent storage to be sent to the Content Generator in subsequent page requests.
     * 
     * @param name 	Custom attribute name as configured in the Maxymiser UI
     * @param value 	Custom attribute value
     */
    function storeAttr(name: string, value: string);
    /**
     * Saves the external visitor ID to permanent storage to be sent to the Content Generator in subsequent page requests.
     * 
     * @param key 	External ID key bound to a specific data table. The value can be an integer from 1 to 5.
     * @param value 	External ID value that corresponds to the first column of the table.
     */
    function storeId(key: number, value: string);
}
declare namespace cookies {
    /**
     * Reads the value of the cookie.
     * 
     * @param name 	Name of the cookie
     */
    function get(name: string);
    /**
     * Retrieves the value of the custom attribute that was saved using visitor.storeAttr().
     * 
     * @param name 	Name of the cookie
     * @param properties 	Optional properties of the cookie (every property is optional as well):
     *     - domain ← String: Optional domain where cookie should be removed (by default, the mmapi configuration is used).
     *     - path ← String: Optional path where cookie should be removed (the default value is '/').
     *     - secure ← Boolean: Optional secure flag (the default value is false).
     */
    function remove(name: string, properties?: Object);
    /**
     * Retrieves the custom variable value from persistent storage.
     * 
     * @param name 	Name of the cookie
     * @param value 	Value of the cookie
     * @param properties 	Optional properties of the cookie (every property is optional as well):
     *     - domain ← String: Optional domain where cookie should be removed (by default, the mmapi configuration is used).
     *     - path ← String: Optional path where cookie should be removed (the default value is '/').
     *     - expires ← Number: Optional cookie expiration (lifetime) defined in days (by default, is set to 0 – session).
     *     - secure ← Boolean: Optional secure flag (the default value is false).
     */
    function set(name: string, value: string, properties?: Object);
}
declare namespace events {
    /**
     * Executes a callback function when DOM is ready.
     * 
     * @param callback 	Optional custom function to be called when DOM is ready
     */
    function domReady(callback?: Function);
    /**
     * Removes event listener from a custom event.
     * 
     * @param name 	Custom event name that was previously established
     * @param handler 	Pointer to the function that was previously assigned as a handler
     */
    function off(name: string, handler: Function);
    /**
     * Assigns event listener to a custom event.
     * 
     * @param name 	Custom event name to bind handlers to. You can also use namespaces to bind handlers to a group of events: namespace1.* will include all names within namespace1 (namespace1.name1, namespace1.name2, etc.)
     * @param handler 	Event handler. Accepts optional argument with custom value passed by events.trigger() method.
     */
    function on(name: string, handler: Function);
    /**
     * Executes all the handlers assigned to a custom event.
     * 
     * @param name 	Custom event name
     * @param data 	Optional data object passed to event handlers
     * @param callback 	Optional function that is called after all event handlers are executed. If no handlers have been set, callback is not called.
     */
    function trigger(name: string, data?: Object , callback?: Function);
}
declare namespace Deferred {
    /**
     * Returns a chainable Promise object which assigns callbacks to the linked Deferred object and observes when the task finishes.
     */
    function promise(): Promise;
    /**
     * Adds handlers that are called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallback 	A function or array of functions that is called when the Deferred object is resolved or rejected.
     * @param alwaysCallbacks 	(Optional) Additional functions or arrays of functions that are called when the Deferred object is resolved or rejected.
     */
    function always(alwaysCallback: Function | Array<Function>, alwaysCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Adds handlers that are called when the Deferred object is resolved.
     * 
     * @param doneCallback 	A function or array of functions that is called when the Deferred object is resolved.
     * @param doneCallbacks 	(Optional) Additional functions or arrays of functions that are called when the Deferred object is resolved.
     */
    function done(doneCallback: Function | Array<Function>, doneCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Adds handlers that are called when the Deferred object is rejected.
     * 
     * @param failCallback 	A function or array of functions that is called when the Deferred object is resolved.
     * @param failCallbacks 	(Optional) Additional functions or arrays of functions that are called when the Deferred object is resolved.
     */
    function fail(failCallback: Function | Array<Function>, failCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Calls the progressCallbacks on a Deferred object with the given args.
     * 
     * @param data 	(Optional) Arguments that are passed to the progressCallbacks.
     */
    function notify(data?: Object): Deferred;
    /**
     * Calls the progressCallbacks on a Deferred object with the given context and args.
     * 
     * @param context 	The context that is passed to the progressCallbacks as the "this" object.
     * @param data 	(Optional) An array of arguments that is passed to the progressCallbacks.
     */
    function notifyWith(context?: Object, data?: Array<String>): Deferred;
    /**
     * Adds handlers that are called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks 	The context that is passed to the progressCallbacks as the "this" object.
     */
    function progress(progressCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Rejects a Deferred object and calls any failCallbacks with the given args.
     * 
     * @param args 	(Optional) Arguments that are passed to the failCallbacks.
     */
    function reject(args?): Deferred;
    /**
     * Rejects a Deferred object and calls any failCallbacks with the given context and args.
     * 
     * @param context 	The context that is passed to the failCallbacks as the "this" object.
     * @param args 	(Optional) An array of arguments that is passed to the failCallbacks.
     */
    function rejectWith(context?: Object, args?: Array<String>): Deferred;
    /**
     * Resolves a Deferred object and calls any doneCallbacks with the given args.
     * 
     * @param args 	(Optional) Arguments that are passed to the doneCallbacks.
     */
    function resolve(args?): Deferred;
    /**
     * Resolves a Deferred object and calls any doneCallbacks with the given context and args.
     * 
     * @param context 	The context that is passed to the doneCallbacks as the "this" object.
     * @param args 	(Optional) An array of arguments that is passed to the doneCallbacks.
     */
    function resolveWith(context?: Object, args?: Array<String>): Deferred;
    /**
     * Determines the current state of a Deferred object.
     */
    function state(): string;
    /**
     * Adds handlers that are called when the Deferred object is resolved, rejected, or still in progress. 
     * 
     * @param doneCallbacks 	A function or array of functions that is called when the Deferred object is resolved.
     * @param failCallbacks 	A function or array of functions that is called when the Deferred object is rejected.
     * @param progressCallbacks 	A function or array of functions that is called when the Deferred object notifies progress.
     */
    function then(doneCallbacks: Function | Array<Function>, failCallbacks?: Function | Array<Function>, progressCallbacks?: Function | Array<Function>): Deferred | Promise;
}
declare namespace recommendations {
    /**
     * Returns all the recommended products that arrived with MaxRecommend campaigns to the current page.
     */
    function getProducts(): Object;
    /**
     * An alias for visitor.requestPage(). Sends an additional request to Maxymiser's Content Generator to pass the parameters captured on the page and retrieve test data.
     * 
     * @param virtualUrl 	URL value to be passed to the Content Generator. To prevent looping, you cannot pass the same URL as the URL of the original page. Please note that in case an empty string is passed, the original page URL is used for page determination.
     */
    function requestPage(virtualUrl: string): Promise;
    /**
     * Sets filtration by category name for the upcoming MaxRecommend campaigns. This setting is being passed to Content Generator, so that filtration itself is performed on the server side.
     * 
     * @param categoryId 	Category level in the inventory hierarchy. Takes values from 1 to 3 meaning filtering by category of the 1st, 2nd or 3rd level.
     * @param categoryName 	Name of the category the recommended products will be filtered by. E.g., "Books", "Cloths", "Electornics", etc.
     * @param isInclusive 	Flag that determines whether to include or exclude products of the specified category.
     */
    function setCategoryFilter(categoryId: Number, categoryName: string, isInclusive: boolean ): Recommendations;
    /**
     * Sets filtration by category id for the upcoming MaxRecommend campaigns. This setting is being passed to Content Generator, so that filtration itself is performed on the server side.
     * 
     * @param categoryId 	Category level in the inventory hierarchy. Takes values from 1 to 3 meaning filtering by category of the 1st, 2nd or 3rd level.
     * @param productId 	Id of the product the recommended products will be filtered by 
     * @param isInclusive 	Flag that determines whether to include or exclude products of the specified product category.
     */
    function setProductFilter(categoryId: Number, productId: string, isInclusive: boolean): Recommendations;
}
declare namespace modules {
    /**
     * Defines a custom module.
     * 
     * @param name 	Unique name of the module, should conform JavScript variable naming rules
     * @param properties 	Optional properties for the module:
     *     - autoDefine ← Boolean: Automatic module declaration. If set to true (default value), the module is available by its name. If set to false, you need to retrieve the module instance by calling modules.require().
     *     - singleton ← Boolean: Force using one instance for all page scripts. If set to true (default value), all scripts will have access to the same instance. If  set to false, each script will get its own instance.
     *     - extend ← Module: Name of the parent module to extend from
     * @param constructor 	A function to be used as module constructor
     */
    function define(name: string, properties?: Object, constructor?: Function ): Modules;
    /**
     * Gets instance of a module.
     * 
     * @param name 	Name of the module
     */
    function require(name: string): Modules;
}

declare namespace widgets {
    /**
     * Embeds a call out in the test page
     */
    function createCallout( properties: Object ): void;
    /**
     * Embeds a lightbox in the test page
     */
    function createLightbox( properties: Object ): void;
    /**
     * Embeds a notification in the test page
     */
    function createNotification( properties: Object ): void;
}