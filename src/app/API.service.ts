/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateProduct: OnCreateProductSubscription;
  onUpdateProduct: OnUpdateProductSubscription;
  onDeleteProduct: OnDeleteProductSubscription;
  onCreateCategory: OnCreateCategorySubscription;
  onUpdateCategory: OnUpdateCategorySubscription;
  onDeleteCategory: OnDeleteCategorySubscription;
  onCreateSubCategory: OnCreateSubCategorySubscription;
  onUpdateSubCategory: OnUpdateSubCategorySubscription;
  onDeleteSubCategory: OnDeleteSubCategorySubscription;
};

export type CreateProductInput = {
  id?: string | null;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  price: number;
  sellingPrice: number;
  quantity: number;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  brand?: ModelStringInput | null;
  varient?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  sellingPrice?: ModelFloatInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
  productCategoryId?: ModelIDInput | null;
  productSubCategoryId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Product = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: Category | null;
  SubCategory?: SubCategory | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type Category = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type SubCategory = {
  __typename: "SubCategory";
  id: string;
  category?: Category | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
  brand?: string | null;
  varient?: string | null;
  description?: string | null;
  image?: string | null;
  price?: number | null;
  sellingPrice?: number | null;
  quantity?: number | null;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
};

export type DeleteProductInput = {
  id: string;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  image: string;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  image?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateSubCategoryInput = {
  id?: string | null;
  name: string;
  image: string;
  subCategoryCategoryId?: string | null;
};

export type ModelSubCategoryConditionInput = {
  name?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelSubCategoryConditionInput | null> | null;
  or?: Array<ModelSubCategoryConditionInput | null> | null;
  not?: ModelSubCategoryConditionInput | null;
  subCategoryCategoryId?: ModelIDInput | null;
};

export type UpdateSubCategoryInput = {
  id: string;
  name?: string | null;
  image?: string | null;
  subCategoryCategoryId?: string | null;
};

export type DeleteSubCategoryInput = {
  id: string;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  brand?: ModelStringInput | null;
  varient?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  price?: ModelFloatInput | null;
  sellingPrice?: ModelFloatInput | null;
  quantity?: ModelIntInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
  productCategoryId?: ModelIDInput | null;
  productSubCategoryId?: ModelIDInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelProductConnection = {
  __typename: "ModelProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
};

export type SearchableProductFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  brand?: SearchableStringFilterInput | null;
  varient?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  image?: SearchableStringFilterInput | null;
  price?: SearchableFloatFilterInput | null;
  sellingPrice?: SearchableFloatFilterInput | null;
  quantity?: SearchableIntFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  productCategoryId?: SearchableIDFilterInput | null;
  productSubCategoryId?: SearchableIDFilterInput | null;
  and?: Array<SearchableProductFilterInput | null> | null;
  or?: Array<SearchableProductFilterInput | null> | null;
  not?: SearchableProductFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableProductSortInput = {
  field?: SearchableProductSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableProductSortableFields {
  id = "id",
  name = "name",
  brand = "brand",
  varient = "varient",
  description = "description",
  image = "image",
  price = "price",
  sellingPrice = "sellingPrice",
  quantity = "quantity",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productCategoryId = "productCategoryId",
  productSubCategoryId = "productSubCategoryId"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type SearchableProductAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableProductAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum"
}

export enum SearchableProductAggregateField {
  id = "id",
  name = "name",
  brand = "brand",
  varient = "varient",
  description = "description",
  image = "image",
  price = "price",
  sellingPrice = "sellingPrice",
  quantity = "quantity",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productCategoryId = "productCategoryId",
  productSubCategoryId = "productSubCategoryId"
}

export type SearchableProductConnection = {
  __typename: "SearchableProductConnection";
  items: Array<Product | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type SearchableCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  image?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableCategoryFilterInput | null> | null;
  or?: Array<SearchableCategoryFilterInput | null> | null;
  not?: SearchableCategoryFilterInput | null;
};

export type SearchableCategorySortInput = {
  field?: SearchableCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableCategorySortableFields {
  id = "id",
  name = "name",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableCategoryAggregateField;
};

export enum SearchableCategoryAggregateField {
  id = "id",
  name = "name",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export type SearchableCategoryConnection = {
  __typename: "SearchableCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type ModelSubCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelSubCategoryFilterInput | null> | null;
  or?: Array<ModelSubCategoryFilterInput | null> | null;
  not?: ModelSubCategoryFilterInput | null;
  subCategoryCategoryId?: ModelIDInput | null;
};

export type ModelSubCategoryConnection = {
  __typename: "ModelSubCategoryConnection";
  items: Array<SubCategory | null>;
  nextToken?: string | null;
};

export type SearchableSubCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  image?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  subCategoryCategoryId?: SearchableIDFilterInput | null;
  and?: Array<SearchableSubCategoryFilterInput | null> | null;
  or?: Array<SearchableSubCategoryFilterInput | null> | null;
  not?: SearchableSubCategoryFilterInput | null;
};

export type SearchableSubCategorySortInput = {
  field?: SearchableSubCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableSubCategorySortableFields {
  id = "id",
  name = "name",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  subCategoryCategoryId = "subCategoryCategoryId"
}

export type SearchableSubCategoryAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchableSubCategoryAggregateField;
};

export enum SearchableSubCategoryAggregateField {
  id = "id",
  name = "name",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  subCategoryCategoryId = "subCategoryCategoryId"
}

export type SearchableSubCategoryConnection = {
  __typename: "SearchableSubCategoryConnection";
  items: Array<SubCategory | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateSubCategoryMutation = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type UpdateSubCategoryMutation = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type DeleteSubCategoryMutation = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    brand: string;
    varient: string;
    description?: string | null;
    image: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    SubCategory?: {
      __typename: "SubCategory";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      subCategoryCategoryId?: string | null;
      owner?: string | null;
    } | null;
    price: number;
    sellingPrice: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    productCategoryId?: string | null;
    productSubCategoryId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SearchProductsQuery = {
  __typename: "SearchableProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    brand: string;
    varient: string;
    description?: string | null;
    image: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    SubCategory?: {
      __typename: "SubCategory";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      subCategoryCategoryId?: string | null;
      owner?: string | null;
    } | null;
    price: number;
    sellingPrice: number;
    quantity: number;
    createdAt: string;
    updatedAt: string;
    productCategoryId?: string | null;
    productSubCategoryId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SearchCategoriesQuery = {
  __typename: "SearchableCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type GetSubCategoryQuery = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type ListSubCategoriesQuery = {
  __typename: "ModelSubCategoryConnection";
  items: Array<{
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SearchSubCategoriesQuery = {
  __typename: "SearchableSubCategoryConnection";
  items: Array<{
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<{
    __typename: "SearchableAggregateResult";
    name: string;
    result:
      | (
          | {
              __typename: "SearchableAggregateScalarResult";
              value: number;
            }
          | {
              __typename: "SearchableAggregateBucketResult";
              buckets?: Array<{
                __typename: string;
                key: string;
                doc_count: number;
              } | null> | null;
            }
        )
      | null;
  } | null>;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  brand: string;
  varient: string;
  description?: string | null;
  image: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  SubCategory?: {
    __typename: "SubCategory";
    id: string;
    category?: {
      __typename: "Category";
      id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    subCategoryCategoryId?: string | null;
    owner?: string | null;
  } | null;
  price: number;
  sellingPrice: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  productCategoryId?: string | null;
  productSubCategoryId?: string | null;
  owner?: string | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateSubCategorySubscription = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type OnUpdateSubCategorySubscription = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

export type OnDeleteSubCategorySubscription = {
  __typename: "SubCategory";
  id: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  subCategoryCategoryId?: string | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateSubCategory(
    input: CreateSubCategoryInput,
    condition?: ModelSubCategoryConditionInput
  ): Promise<CreateSubCategoryMutation> {
    const statement = `mutation CreateSubCategory($input: CreateSubCategoryInput!, $condition: ModelSubCategoryConditionInput) {
        createSubCategory(input: $input, condition: $condition) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubCategoryMutation>response.data.createSubCategory;
  }
  async UpdateSubCategory(
    input: UpdateSubCategoryInput,
    condition?: ModelSubCategoryConditionInput
  ): Promise<UpdateSubCategoryMutation> {
    const statement = `mutation UpdateSubCategory($input: UpdateSubCategoryInput!, $condition: ModelSubCategoryConditionInput) {
        updateSubCategory(input: $input, condition: $condition) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubCategoryMutation>response.data.updateSubCategory;
  }
  async DeleteSubCategory(
    input: DeleteSubCategoryInput,
    condition?: ModelSubCategoryConditionInput
  ): Promise<DeleteSubCategoryMutation> {
    const statement = `mutation DeleteSubCategory($input: DeleteSubCategoryInput!, $condition: ModelSubCategoryConditionInput) {
        deleteSubCategory(input: $input, condition: $condition) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubCategoryMutation>response.data.deleteSubCategory;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    id?: string,
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($id: ID, $filter: ModelProductFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listProducts(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            name
            brand
            varient
            description
            image
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            SubCategory {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              subCategoryCategoryId
              owner
            }
            price
            sellingPrice
            quantity
            createdAt
            updatedAt
            productCategoryId
            productSubCategoryId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async SearchProducts(
    filter?: SearchableProductFilterInput,
    sort?: Array<SearchableProductSortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableProductAggregationInput | null>
  ): Promise<SearchProductsQuery> {
    const statement = `query SearchProducts($filter: SearchableProductFilterInput, $sort: [SearchableProductSortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableProductAggregationInput]) {
        searchProducts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
          __typename
          items {
            __typename
            id
            name
            brand
            varient
            description
            image
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            SubCategory {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              subCategoryCategoryId
              owner
            }
            price
            sellingPrice
            quantity
            createdAt
            updatedAt
            productCategoryId
            productSubCategoryId
            owner
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchProductsQuery>response.data.searchProducts;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    id?: string,
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($id: ID, $filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listCategories(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async SearchCategories(
    filter?: SearchableCategoryFilterInput,
    sort?: Array<SearchableCategorySortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableCategoryAggregationInput | null>
  ): Promise<SearchCategoriesQuery> {
    const statement = `query SearchCategories($filter: SearchableCategoryFilterInput, $sort: [SearchableCategorySortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableCategoryAggregationInput]) {
        searchCategories(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
          __typename
          items {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchCategoriesQuery>response.data.searchCategories;
  }
  async GetSubCategory(id: string): Promise<GetSubCategoryQuery> {
    const statement = `query GetSubCategory($id: ID!) {
        getSubCategory(id: $id) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubCategoryQuery>response.data.getSubCategory;
  }
  async ListSubCategories(
    id?: string,
    filter?: ModelSubCategoryFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListSubCategoriesQuery> {
    const statement = `query ListSubCategories($id: ID, $filter: ModelSubCategoryFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listSubCategories(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubCategoriesQuery>response.data.listSubCategories;
  }
  async SearchSubCategories(
    filter?: SearchableSubCategoryFilterInput,
    sort?: Array<SearchableSubCategorySortInput | null>,
    limit?: number,
    nextToken?: string,
    from?: number,
    aggregates?: Array<SearchableSubCategoryAggregationInput | null>
  ): Promise<SearchSubCategoriesQuery> {
    const statement = `query SearchSubCategories($filter: SearchableSubCategoryFilterInput, $sort: [SearchableSubCategorySortInput], $limit: Int, $nextToken: String, $from: Int, $aggregates: [SearchableSubCategoryAggregationInput]) {
        searchSubCategories(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
          __typename
          items {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          nextToken
          total
          aggregateItems {
            __typename
            name
            result {
              __typename
              ... on SearchableAggregateScalarResult {
                value
              }
              ... on SearchableAggregateBucketResult {
                buckets {
                  __typename
                  key
                  doc_count
                }
              }
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    if (aggregates) {
      gqlAPIServiceArguments.aggregates = aggregates;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchSubCategoriesQuery>response.data.searchSubCategories;
  }
  OnCreateProductListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
  > {
    const statement = `subscription OnCreateProduct($owner: String) {
        onCreateProduct(owner: $owner) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProduct">>
    >;
  }

  OnUpdateProductListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
  > {
    const statement = `subscription OnUpdateProduct($owner: String) {
        onUpdateProduct(owner: $owner) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProduct">>
    >;
  }

  OnDeleteProductListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
  > {
    const statement = `subscription OnDeleteProduct($owner: String) {
        onDeleteProduct(owner: $owner) {
          __typename
          id
          name
          brand
          varient
          description
          image
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          SubCategory {
            __typename
            id
            category {
              __typename
              id
              name
              image
              createdAt
              updatedAt
              owner
            }
            name
            image
            createdAt
            updatedAt
            subCategoryCategoryId
            owner
          }
          price
          sellingPrice
          quantity
          createdAt
          updatedAt
          productCategoryId
          productSubCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProduct">>
    >;
  }

  OnCreateCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  > {
    const statement = `subscription OnCreateCategory($owner: String) {
        onCreateCategory(owner: $owner) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
    >;
  }

  OnUpdateCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  > {
    const statement = `subscription OnUpdateCategory($owner: String) {
        onUpdateCategory(owner: $owner) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
    >;
  }

  OnDeleteCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  > {
    const statement = `subscription OnDeleteCategory($owner: String) {
        onDeleteCategory(owner: $owner) {
          __typename
          id
          name
          image
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
    >;
  }

  OnCreateSubCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubCategory">>
  > {
    const statement = `subscription OnCreateSubCategory($owner: String) {
        onCreateSubCategory(owner: $owner) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubCategory">>
    >;
  }

  OnUpdateSubCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubCategory">>
  > {
    const statement = `subscription OnUpdateSubCategory($owner: String) {
        onUpdateSubCategory(owner: $owner) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubCategory">>
    >;
  }

  OnDeleteSubCategoryListener(
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubCategory">>
  > {
    const statement = `subscription OnDeleteSubCategory($owner: String) {
        onDeleteSubCategory(owner: $owner) {
          __typename
          id
          category {
            __typename
            id
            name
            image
            createdAt
            updatedAt
            owner
          }
          name
          image
          createdAt
          updatedAt
          subCategoryCategoryId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubCategory">>
    >;
  }
}
