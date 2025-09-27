'use client';
import React from 'react';
import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  // TODO: Implement isActive logic or import isActive and path
  const pathname: string = usePathname();
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={
              `hover:text-yellow-500 transition-colors ${
                isActive(item.href) ? 'text-gray-400' : ''
              }` /* Add isActive logic here if needed */
            }
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;
