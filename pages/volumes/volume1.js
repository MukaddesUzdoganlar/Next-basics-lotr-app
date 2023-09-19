import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Volume1() {
  const currentIndex = volumes.findIndex((v) => v.slug === volume.slug);
  const previousVolume = volumes[currentIndex - 1];
  const nextVolume = volumes[currentIndex + 1];

  return (
    <div>
      <Link href="{HomePage}">
        <p> All Volumes</p>
      </Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>The Fellowship of the Ring</h2>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{`${book.ordinal} - ${book.title}`}</li>
        ))}
      </ul>
      {volume.cover && (
        <div>
          <h2>Cover</h2>
          <Image
            src={`/covers/${volume.cover}`}
            alt={`${volume.title} Cover`}
            width={140}
            height={230}
          />
        </div>
      )}
      <div>
        {previousVolume && (
          <Link href={`/volumes/${previousVolume.slug}`}>
            <a>Previous Volume</a>
          </Link>
        )}
      </div>
      <div>
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            <a>Next Volume</a>
          </Link>
        )}
      </div>
    </div>
  );
}
