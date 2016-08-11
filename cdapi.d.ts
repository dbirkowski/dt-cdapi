interface Promise {
}
interface Deferred {
}
interface Renderer {
}
interface Recommendations {
}
interface Modules {
}

declare function when( condition: Function, stopCondition?: Function ): Promise;
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
    function bringToFront(element: HTMLElement, zIndex?: Number): void;
    function bringToFront(element: Array <HTMLElement> , zIndex?: Number): void;
    /**
     * Updates an existing image or banner.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param properties Optional banner properties:
     * 
     * linkUrl ← String'href' value; if omitted image is not wrapped with <a> tag.
     * imageUrl ← StringImage 'src' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * imageAlt ← StringImage 'alt' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     * imageTitle ← StringImage 'title' attribute value; if you don't pass a property, the attribute is not added within the node attribute.
     */
    function changeImageBanner(element: string, properties: Object): void;
    function changeImageBanner(element: HTMLElement, properties: Object): void;
    function changeImageBanner(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Sets the 'href' attribute value of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param value New 'href' attribute value.
     */
    function changeLinkUrl(element: string, value: string): void;
    function changeLinkUrl(element: HTMLElement, value: string): void;
    function changeLinkUrl(element: Array <HTMLElement> , value: string): void;
    /**
     * Updates the inline style of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param cssRules New CSS rules for the target node.
     */
    function changeStyle(element: string, cssRules: string): void;
    function changeStyle(element: HTMLElement, cssRules: string): void;
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
    function editHtml(element: HTMLElement, html: string): void;
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
    function freeMove(element: HTMLElement, deltaX: Number, deltaY: Number): void;
    function freeMove(element: Array <HTMLElement> , deltaX: Number, deltaY: Number): void;
    /**
     * Changes the relative placement of the target node within its parent in relation to the siblings.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param index New position of the target node compared to its siblings. Index starts from 0.
     */
    function guidedMove(element: string, index: Number): void;
    function guidedMove(element: HTMLElement, index: Number): void;
    function guidedMove(element: Array <HTMLElement> , index: Number): void;
    /**
     * Hides the target node.
     * 
     * @param element Element(s) or CSS path to be hidden via added 'visibility: hidden' style
     */
    function hide(element: string): void;
    function hide(element: HTMLElement): void;
    function hide(element: Array <HTMLElement> ): void;
    /**
     * Adds HTML content above the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlAbove(element: string, html: string): void;
    function insertHtmlAbove(element: HTMLElement, html: string): void;
    function insertHtmlAbove(element: Array <HTMLElement> , html: string): void;
    /**
     * Adds HTML content below the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlBelow(element: string, html: string): void;
    function insertHtmlBelow(element: HTMLElement, html: string): void;
    function insertHtmlBelow(element: Array <HTMLElement> , html: string): void;
    /**
     * Adds HTML content to the end of the content of the target node.
     * 
     * @param element Element(s) or CSS path to be processed.
     * @param html HTML to be added.
     */
    function insertHtmlWithin(element: string, html: string): void;
    function insertHtmlWithin(element: HTMLElement, html: string): void;
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
    function insertImageBannerAbove(element: HTMLElement, properties: Object): void;
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
    function insertImageBannerBelow(element: HTMLElement, properties: Object): void;
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
    function insertImageBannerWithin(element: HTMLElement, properties: Object): void;
    function insertImageBannerWithin(element: Array <HTMLElement> , properties: Object): void;
    /**
     * Deletes the target node from the DOM.
     */
    function remove(element: string): void;
    function remove(element: HTMLElement): void;
    function remove(element: Array <HTMLElement> ): void;
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
    function resize(element: Array <HTMLElement> , width: Number, height: Number, deltaX: Number, deltaY: Number): void;
    /**
     * Sets the specified attribute values for the selected elements.
     */
    function setNodesAttribute(selector: String, name: String, value: String): void;
}

declare namespace renderer {
    /**
     * Makes a request to the Content Generator to get campaign content.
     */
    function getContent(virtualUrl?: string): Deferred;
    /**
     * Hides the test areas for replacement with alternative content.
     */
    function hide(selector: string, alias?: string): Renderer;
    /**
     * Applies an element to the page immediately.
     */
    function runVariantJs(element?: string ): Renderer;
    /**
     * Shows content using the given alias identifier.
     */
    function show(alias: string): Renderer;
    /**
     * Shows all previously hidden content for the current campaign.
     */
    function showAll(): Renderer;
    /**
     * Automatically displays content after a specified time has elapsed.
     */
    function unhideAfter(timeout: number): Renderer;
    /**
     * Executes the when() method before DOM is ready. 
     */
    function waitUntilDom(consition: Function): Deferred;
    /**
     * Checks if the specified element exists on the page and executes success and always callbacks.
     */
    function waitForElement(selector: string): Deferred;
    /**
     * renderer.when() is an alias to when() function
     */
    function when(): Deferred;
}
declare namespace actions {
    /**
     * Captures action data to be sent to the Content Generator in subsequent requests.
     */
    function postpone(name: string, value?: number, attribute?: string);
    /**
     * Sends all captured action data to the Content Generator.
     */
    function send(name?: string, value?: number, attribute?: string);
    /**
     * Captures action data to be sent to the Content Generator when actions.send() is called.
     */
    function set(name: string, value?: number, attribute?: string);
}
declare namespace visitor {
    /**
     * Removes custom variable data from persistent storage.
     */
    function clearData(name: string);
    /**
     * Retrieves the value of the custom attribute that was saved using visitor.storeAttr().
     */
    function getAttr(name: string);
    /**
     * Retrieves the custom variable value from persistent storage.
     */
    function getData(name?: string);
    /**
     * Returns attributes that are enabled for use in the browser.
     */
    function getServerAttrs();
    /**
     * Redirects the visitor to the specified URL.
     */
    function navigateTo(targetUrl: string);
    /**
     * Removes the value of a custom attribute from persistent storage.
     */
    function removeAttr(name: string);
    /**
     * Removes the value of the external visitor ID from persistent storage.
     */
    function removeId(key: number);
    /**
     * Sends additional request to Maxymiser Content Generator.
     */
    function requestPage(virtualUrl: string);
    /**
     * Captures custom attribute data to temporary storage to be sent to the Content Generator in subsequent page requests.
     */
    function setAttr(name: string, value: string);
    /**
     * Saves the custom variable value in persistent storage, so it can be retrieved on other site pages using visitor.getData().
     */
    function setData(name: string, value: string, expires?: number);
    /**
     * Captures the external visitor ID to temporary storage to be sent to the Content Generator.
     */
    function setId(key: number, value: string);
    /**
     * Saves custom attribute data to permanent storage to be sent to the Content Generator in subsequent page requests.
     */
    function storeAttr(name: string, value: string);
    /**
     * Saves the external visitor ID to permanent storage to be sent to the Content Generator in subsequent page requests.
     */
    function storeId(key: number, value: string);
}
declare namespace cookies {
    /**
     * Reads the value of the cookie.
     */
    function get(name: string);
    /**
     * Retrieves the value of the custom attribute that was saved using visitor.storeAttr().
     */
    function remove(name: string, properties?: Object );
    /**
     * Retrieves the custom variable value from persistent storage.
     */
    function set(name: string, value: string, properties?: Object );
}
declare namespace events {
    /**
     * Executes a callback function when DOM is ready.
     */
    function domReady(callback?: Function);
    /**
     * Removes event listener from a custom event.
     */
    function off(name: string, handler: Function);
    /**
     * Assigns event listener to a custom event.
     */
    function on(name: string, handler: Function);
    /**
     * Executes all the handlers assigned to a custom event.
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
     */
    function always(alwaysCallback: Function | Array<Function>, alwaysCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Adds handlers that are called when the Deferred object is resolved.
     */
    function done(doneCallback: Function | Array<Function>, doneCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Adds handlers that are called when the Deferred object is rejected.
     */
    function fail(failCallback: Function | Array<Function>, failCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Calls the progressCallbacks on a Deferred object with the given args.
     */
    function notify(data?: Object): Deferred;
    /**
     * Calls the progressCallbacks on a Deferred object with the given context and args.
     */
    function notifyWith(context?: Object, data?: Array<String>): Deferred;
    /**
     * Adds handlers that are called when the Deferred object generates progress notifications.
     */
    function progress(progressCallbacks: Function | Array<Function>): Deferred | Promise;
    /**
     * Rejects a Deferred object and calls any failCallbacks with the given args.
     */
    function reject(args?): Deferred;
    /**
     * Rejects a Deferred object and calls any failCallbacks with the given context and args.
     */
    function rejectWith(context?: Object, args?: Array<String>): Deferred;
    /**
     * Resolves a Deferred object and calls any doneCallbacks with the given args.
     */
    function resolve(args?): Deferred;
    /**
     * Resolves a Deferred object and calls any doneCallbacks with the given context and args.
     */
    function resolveWith(context?: Object, args?: Array<String>): Deferred;
    /**
     * Determines the current state of a Deferred object.
     */
    function state(): string;
    /**
     * Adds handlers that are called when the Deferred object is resolved, rejected, or still in progress. 
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
     */
    function requestPage(virtualUrl: string): Promise;
    /**
     * Sets filtration by category name for the upcoming MaxRecommend campaigns. This setting is being passed to Content Generator, so that filtration itself is performed on the server side.
     */
    function setCategoryFilter(categoryId: Number, categoryName: string, isInclusive: boolean ): Recommendations;
    /**
     * Sets filtration by category id for the upcoming MaxRecommend campaigns. This setting is being passed to Content Generator, so that filtration itself is performed on the server side.
     */
    function setProductFilter(categoryId: Number, productId: string, isInclusive: boolean): Recommendations;
}
declare namespace modules {
    /**
     * Defines a custom module.
     */
    function define(name: string, properties?: Object, constructor?: Function ): Modules;
    /**
     * Gets instance of a module.
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