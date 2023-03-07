export interface ProductsResponse {
    searchTerm:                 string;
    categoryName:               string;
    itemCount:                  number;
    redirectUrl:                string;
    products:                   ProductsResponseProduct[];
    facets:                     Facet[];
    diagnostics:                Diagnostics;
    searchPassMeta:             SearchPassMeta;
    queryId:                    null;
    discoverSearchProductTypes: any[];
    campaigns:                  Campaigns;
}

export interface Campaigns {
    imageTiles:        any[];
    promoBanners:      any[];
    sponsoredProducts: any[];
}

export interface Diagnostics {
    requestId:                string;
    processingTime:           number;
    queryTime:                number;
    recommendationsEnabled:   boolean;
    recommendationsAnalytics: RecommendationsAnalytics;
    advertisementsEnabled:    boolean;
    advertisementsAnalytics:  AdvertisementsAnalytics;
}

export interface AdvertisementsAnalytics {
    status:                   number;
    customerOptIn:            boolean;
    numberOfItemsFromPartner: number;
    items:                    any[];
    placementBeacons:         PlacementBeacons;
}

export interface PlacementBeacons {
    onLoadBeacon: null;
    onViewBeacon: null;
}

export interface RecommendationsAnalytics {
    personalisationStatus: number;
    numberOfItems:         number;
    numberOfRecs:          number;
    personalisationType:   string;
    experimentTrackerkey:  string;
    items:                 any[];
}

export interface Facet {
    id:                string;
    name:              string;
    facetValues:       FacetValue[];
    displayStyle:      DisplayStyle;
    facetType:         FacetType;
    hasSelectedValues: boolean;
}

export enum DisplayStyle {
    PriceSlider = "Price-Slider",
    SingleColumn = "Single-Column",
}

export enum FacetType {
    Range = "Range",
    TextMultiSelect = "TextMultiSelect",
}

export interface FacetValue {
    count:      number;
    id:         string;
    name:       string;
    isSelected: boolean;
}

export interface ProductsResponseProduct {
    id:                  number;
    name:                string;
    price:               Price;
    colour:              string;
    colourWayId:         number;
    brandName:           BrandName;
    hasVariantColours:   boolean;
    hasMultiplePrices:   boolean;
    groupId:             null;
    productCode:         number;
    productType:         ProductType;
    url:                 string;
    imageUrl:            string;
    videoUrl:            null;
    isSellingFast:       boolean;
    sponsoredCampaignId: null;
    facetGroupings:      FacetGrouping[];
    advertisement:       null;
}

export enum BrandName {
    AsosDesign = "ASOS DESIGN",
    Collusion = "Collusion",
}

export interface FacetGrouping {
    products: FacetGroupingProduct[];
    type:     string;
}

export interface FacetGroupingProduct {
    productId: number;
}

export interface Price {
    current:       Current;
    previous:      Current;
    rrp:           Current;
    isMarkedDown:  boolean;
    isOutletPrice: boolean;
    currency:      Currency;
}

export enum Currency {
    Usd = "USD",
}

export interface Current {
    value: number | null;
    text:  string;
}

export enum ProductType {
    Product = "Product",
}

export interface SearchPassMeta {
    isPartial:            boolean;
    isSpellcheck:         boolean;
    searchPass:           any[];
    alternateSearchTerms: any[];
}