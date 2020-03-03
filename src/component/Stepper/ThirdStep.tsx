import React, { MouseEvent, ChangeEvent } from 'react'
import {
	InputTitle,
	CardToolsContent,
	CardToolsTitle,
	CardServicesWrapper,
	CardServicesContainer,
	CardServiceBorder,
	ServiceIcon,
	ServiceCheckButton,
} from './style'
import TicketIcon from 'asset/icon/ticket.svg'
import CheckIcon from 'asset/icon/check.svg'
import SingleIcon from 'asset/icon/single.svg'
import MultiIcon from 'asset/icon/multi.svg'
import FormIcon from 'asset/icon/form.svg'
import ReportIcon from 'asset/icon/report.svg'
import QrScanIcon from 'asset/icon/qr-code.svg'
import PayIcon from 'asset/icon/pay.svg'

const SERVICES: { [key: string]: any[] } = {
	page: [
		{ name: 'single', icon: SingleIcon },
		{ name: 'multi', icon: MultiIcon },
	],
	registration: [
		{ name: 'form', icon: FormIcon },
		{ name: 'report', icon: ReportIcon },
		{ name: 'QR scanner', icon: QrScanIcon },
	],
	ticket: [
		{ name: 'free', icon: TicketIcon },
		{ name: 'pay', icon: PayIcon },
	],
}

interface PropTypes {
	services: any
	setState: (event: MouseEvent<HTMLDivElement> & ChangeEvent<HTMLInputElement>) => void
}

const ThirdStep = ({ services, setState }: PropTypes) => (
	<>
		{Object.keys(SERVICES).map(key => (
			<CardServicesWrapper>
				<InputTitle>{key}</InputTitle>
				<CardServicesContainer>
					{SERVICES[key].map(data => (
						<CardServiceBorder>
							<CardToolsContent>
								<ServiceIcon>
									<img src={data.icon} alt={`${data.name}-icon`} />
								</ServiceIcon>
								<CardToolsTitle>{data.name}</CardToolsTitle>
								{key !== 'registration' &&
									(services[key][data.name] ? (
										<ServiceCheckButton
											onClick={setState}
											role={key}
											data-key={data.name}
											value={services[key][data.name]}
										>
											<img src={CheckIcon} alt="check-icon" />
										</ServiceCheckButton>
									) : (
										<ServiceCheckButton
											onClick={setState}
											role={key}
											data-key={data.name}
											value={services[key][data.name]}
										/>
									))}
							</CardToolsContent>
						</CardServiceBorder>
					))}
				</CardServicesContainer>
			</CardServicesWrapper>
		))}
	</>
)
export default ThirdStep
