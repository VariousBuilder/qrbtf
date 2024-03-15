import { useTranslations } from "next-intl";
import { Container } from "@/components/Containers";
import { SectionTitle } from "@/components/Titles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookIcon, HuggingFaceIcon } from "@/components/LogosBrand";

export function SectionRefs() {
  const t = useTranslations("index.refs");

  return (
    <div className="">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="mt-3 flex gap-3 flex-wrap">
        <Link href="https://aigc.latentcat.com" target="_blank">
          <Button variant="secondary" size="sm">
            <BookIcon className="w-4 h-4 mr-2" />
            {t("aigc")}
          </Button>
        </Link>
        <Link href="https://huggingface.co/latentcat" target="_blank">
          <Button variant="secondary" size="sm">
            <HuggingFaceIcon className="w-5 h-5 mr-2" />
            {t("hf")}
          </Button>
        </Link>
        <Link href="https://antfu.me/posts/ai-qrcode-101" target="_blank">
          <Button variant="secondary" size="sm">
            <BookIcon className="w-4 h-4 mr-2" />
            {t("antfu")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
