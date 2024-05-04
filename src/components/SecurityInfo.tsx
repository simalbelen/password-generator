import { Chip, Image } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'

interface SecurityInfoProps {
    security: number
}

function SecurityInfo({ security }: SecurityInfoProps) {
    const { t } = useTranslation()

    return (
        <div className=" w-full h-full flex justify-center items-center flex-col pb-8">
            {security === 0 ? (
                <>
                    <Image
                        className="h-10/12"
                        alt="Security level 1"
                        src="Lvl0.svg"
                    />
                    <Chip size="lg" className="bg-red-400">
                        {t('very-insecure')}
                    </Chip>
                </>
            ) : null}
            {security === 1 ? (
                <>
                    <Image
                        className="h-10/12"
                        alt="Security level 1"
                        src="Lvl1.svg"
                    />
                    <Chip size="lg" className="bg-orange-400">
                        {t('insecure')}
                    </Chip>
                </>
            ) : null}
            {security === 2 ? (
                <>
                    <Image
                        className="h-10/12"
                        alt="Security level 2"
                        src="Lvl2.svg"
                    />
                    <Chip size="lg" className="bg-yellow-400">
                        {t('normal')}
                    </Chip>
                </>
            ) : null}
            {security === 3 ? (
                <>
                    <Image
                        className="h-10/12"
                        alt="Security level 3"
                        src="Lvl3.svg"
                    />
                    <Chip size="lg" className="bg-lime-400">
                        {t('secure')}
                    </Chip>
                </>
            ) : null}
            {security === 4 ? (
                <>
                    <Image
                        className="h-10/12"
                        alt="Security level 4"
                        src="Lvl4.svg"
                    />
                    <Chip size="lg" className="bg-green-400">
                        {t('very-secure')}
                    </Chip>
                </>
            ) : null}
        </div>
    )
}

export default SecurityInfo
