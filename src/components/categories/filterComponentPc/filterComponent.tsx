"use client";

import { useEffect, useState } from "react";
import {
 
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {  FunnelIcon, PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Product from "@/components/Product";
import { Filter, ProductTY, SubCategory } from "../phone";




type FilterComponentProps = {  
  products: ProductTY[];  
  filters: Filter[];  
  subCategories: SubCategory[];  
  title: string;  
};
export interface Filters {  
  color: string[];  
  category: string[];  
}


function classNames(...classes :string[]) {
  return classes.filter(Boolean).join(" ");
}

  
const FilterComponent: React.FC<FilterComponentProps> = ({ products, filters, subCategories, title }) => {  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    color: [],
    category: [],
  });
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState<ProductTY[]>([]);

  // اعمال فیلترها
  useEffect(() => {
    const applyFilters = () => {
      const filtered = products && products?.filter((product) => {
        const colorMatch = selectedFilters.color.length
          ? selectedFilters.color.includes(product.color)
          : true;
       
        const subCategoryMatch = selectedSubCategory
          ? product.category === selectedSubCategory
          : true;

        return colorMatch &&  subCategoryMatch;
      });
      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [selectedFilters, selectedSubCategory , products]);

  // مدیریت تغییرات فیلتر
  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[filterType].push(value);
      }
      return updatedFilters;
    });
  };

  console.log(selectedFilters)
  return (
    <div className="bg-white overflow-x-hidden ">
      {/* Mobile filter dialog */}
      <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="mt-4 border-t border-gray-200"
              >
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="px-2  py-3 font-medium text-gray-900"
                >
                  {subCategories?.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => setSelectedSubCategory(category.name)}
                        className={classNames(
                          selectedSubCategory === category.name
                            ? "text-indigo-600 font-bold"
                            : "text-gray-700",
                          "hover:underline py-2"
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {filters?.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-[&:not([data-open])]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  onChange={() =>
                                    handleFilterChange("color", option.value)
                                  }
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      <main className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon aria-hidden="true" className="size-5" />
          </button>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form onSubmit={(e)=>e.preventDefault()} className="hidden col-span-1 lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                {subCategories?.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedSubCategory(category.name)}
                      className={classNames(
                        selectedSubCategory === category.name
                          ? "text-indigo-600 font-bold"
                          : "text-gray-700",
                        "hover:underline"
                      )}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              { filters.length > 0 && filters?.map((section) => (
                <Disclosure
                  key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                        <MinusIcon
                          aria-hidden="true"
                          className="size-5 group-[&:not([data-open])]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6 ">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            checked={selectedFilters["color"]?.includes(option.value)}
                            onChange={() =>
                              handleFilterChange("color", option.value)
                            }
                            className="rounded border-gray-300"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="text-sm text-gray-600"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
           <div className="col-span-3">
           <div className="  overflow-x-hidden  grid grid-cols-2 md:grid-cols-3  gap-2  ">
              {filteredProducts ? filteredProducts?.map((product) => (
                <div key={product.id}  >
                 <Product product={product} />
                </div>
              )
            ):  
            products && products?.map((product)=> (
              <div key={product.id}  >
                 <Product product={product} />
                </div>
            ))
          }
            </div>
           </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FilterComponent